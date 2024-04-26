import { Component, OnInit } from '@angular/core';
import { FoodApiService } from '../../Services/food-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  ngOnInit(): void {
    this.getAllFoodCart()
    console.log(this.cart);
    
  }

  constructor(public api: FoodApiService) {}
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

}
