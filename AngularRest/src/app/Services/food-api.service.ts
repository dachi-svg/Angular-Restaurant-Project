import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  constructor(public api: HttpClient) { }

  GetAll() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  addToCart(body:any) {
    return this.api.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
  }

  getCart() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  removeFromCart(id:any) {
    return this.api.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
}
