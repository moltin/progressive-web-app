import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController, NavParams } from "ionic-angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MoltinCart } from "../../providers/moltin/models/cart";

@IonicPage({
  name: "checkout-detail",
  segment: "checkout-detail"
})
@Component({
  selector: "page-checkout-detail",
  templateUrl: "checkout-detail.html"
})
export class CheckoutDetailPage {
  private form: FormGroup;
  private cart: MoltinCart = this.navParams.get('cart');

  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required]
    });
  }

  pay() {
    this.navController.push('checkout-payment', {
      'customer': this.form.value,
      'cart': this.cart
    });
  }
}
