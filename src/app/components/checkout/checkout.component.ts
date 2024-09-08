import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems = this.cartService.getCart();
  total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardExpiry: ['', Validators.required],
      cardCvc: ['', Validators.required]
    });
  }

  checkout(): void {
    if (this.checkoutForm.valid) {
      // Handle checkout logic here (e.g., process payment, save order)
      alert('Checkout successful!');
      this.cartService.clearCart();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
