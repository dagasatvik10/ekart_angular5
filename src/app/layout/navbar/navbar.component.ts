import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartService } from '../../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  cartBadge = 0;

  constructor(private cs: CartService) {}

  ngOnInit() {
    this.cs.getCartLength().subscribe(len => {
      this.cartBadge = len;
    });
  }
}
