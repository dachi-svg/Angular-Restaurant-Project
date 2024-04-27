import { Component, OnInit } from '@angular/core';
import { FoodApiService } from '../../Services/food-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  ngOnInit(): void {
    this.getAllFoodCart()
  }

  constructor(public api: FoodApiService, public router: Router) {}
  public cart:any

  getAllFoodCart() {
    this.api.getCart().subscribe(data => {
      this.cart = data
      console.log(this.cart);
    })
  }

  remove(id:any) {
    this.api.removeFromCart(id).subscribe() 
  }

  relod() {
    window.location.reload();
    
  }

}
