import {
    Component, ViewChild, ElementRef
} from '@angular/core';
import {
    NavController,
    IonicPage,
    ModalController,
    ViewController
} from 'ionic-angular';
import Quagga from 'quagga';
import { Moltin } from '../../providers/moltin/moltin';
import { MoltinProduct } from '../../providers/moltin/models/product';
import { Observable, Subscriber } from 'rxjs';


@IonicPage({
    name: 'scan',
    segment: 'scan'
})
@Component({
    selector: 'page-scan',
    templateUrl: 'scan.html'
})
export class ScanPage {

    private codes: {[key: string]: number} = {}
    private scanThreshold: number = 5;

    @ViewChild("scanOverlay") scanOverlay: ElementRef;
    @ViewChild("errorOverlay") errorOverlay: ElementRef;

    private request: Observable<MoltinProduct> = null;
    private observable: Observable<string> = null;
    private observer: Subscriber<string>;

    constructor(
        private navController: NavController,
        private modalController: ModalController,
        private viewController: ViewController,
        private moltin: Moltin
    ) {
    }

    ionViewDidEnter() {
        this.codes = {};
        this.startScanning();

        this.observable = new Observable<string>(observer => {
            this.observer = observer;
        }).debounceTime(250);

        this.observable.subscribe(code => {
            this.foundCode(code);
        });
    }

    ionViewWillLeave() {
        this.stopScanning();

        this.observer.unsubscribe();
    }

    startScanning() {
        Quagga.init({
            locate: false,
            frequency: 10,
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#scanTarget'),
                constraints: {
                    width: 1280,
                    height: 720
                }
            },
            decoder: {
                readers: [
                    "code_128_reader",
                    "ean_reader",
                    "ean_8_reader",
                    "upc_reader",
                    "upc_e_reader"
                ]
            }
        }, (err) => {
            if (err) {
                this.handleCameraError()
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });

        Quagga.onDetected((result) => {
            let code = result.codeResult.code;
            let amount = this.codes[code];
            if (!amount) {
                amount = 0;
            }
            amount = amount + 1;
            if (amount > this.scanThreshold) {
                this.observer.next(code);
            }
            this.codes[code] = amount;
        });
    }

    stopScanning() {
        Quagga.stop();
    }

    foundCode(code) {
        this.stopScanning();
        this.getProduct(code);
    }

    handleCameraError() {
        this.scanOverlay.nativeElement.classList.add("hidden");
        this.errorOverlay.nativeElement.classList.remove("hidden");
    }

    getProduct(code) {
        this.request = this.moltin.getProduct(code);
        this.request.subscribe(
            product => this.goToProduct(product),
            err => { console.error(err); this.startScanning(); }
        )
    }

    goToProduct(product) {
        console.log(product);
        this.navController.push('product', {'product': product})
    }

    manualInput() {
        let modal = this.modalController.create('barcode-input');
        modal.present()
    }

    closeModal() {
        this.viewController.dismiss();
    }
}