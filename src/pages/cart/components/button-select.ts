import { Component, Input, ElementRef, Renderer, ViewChild, Output, EventEmitter } from '@angular/core';
import { Button, Select } from 'ionic-angular';
import { MoltinCartItem } from '../../../providers/moltin/models/cart';
 
@Component({
    selector: 'button-select',
    templateUrl: 'button-select.html'
})
export class ButtonSelect {
 
    @ViewChild(Button) button: Button;
    @ViewChild(Select) select: Select;

    @Input('item') item: MoltinCartItem;
    @Input('label') label: string;

    @Output() onChange: EventEmitter<ButtonSelect> = new EventEmitter<ButtonSelect>();


    getQuantityOptions(): Array<number> {
        return Array.from({length: Math.max(10, this.item.quantity)}, (x,i) => i + 1);
    }

    openQuantity() {
        this.select.open();
    }

    onQuantityChange() {
        this.button.getNativeElement().textContent ="x" + this.getValue();
        this.onChange.emit(this);
    }

    getValue(): number {
        return this.select.value;
    }

    setValue(value) {
        this.button.getNativeElement().textContent ="x" + value;
        this.select.setValue(value);
    }
}