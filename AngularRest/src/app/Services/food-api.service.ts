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
}
