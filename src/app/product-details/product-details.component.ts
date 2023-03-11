import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  //Define addToCart() method in cart.service.ts which adds the current product to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert([product.name] + ' has been added to the cart!');
  }
}
