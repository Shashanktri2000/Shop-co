import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = this.cartService.getCart();
  total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  constructor(private cartService: CartService) {}

  removeItem(productId: number): void {
    this.cartService.getCart().forEach((item, index) => {
      if (item.product.id === productId) {
        this.cartItems.splice(index, 1);
        this.total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      }
    });
  }
}

