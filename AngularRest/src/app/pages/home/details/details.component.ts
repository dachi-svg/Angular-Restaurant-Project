import { Component, OnInit } from '@angular/core';
import { FoodApiService } from '../../../Services/food-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  ngOnInit(): void {
    this.getRouterData()
  }
  public itemQuantity:any
  public actRouterdata:any
  constructor (public api: FoodApiService, public actRouter: ActivatedRoute) {}

  getRouterData() {
    this.actRouter.queryParams.subscribe(data => {
      this.actRouterdata = data
      console.log(data);

    })
  }

  addToCarter() {
    this.api.addToCart({
      "quantity": this.itemQuantity,
      "price": this.actRouterdata.price * this.itemQuantity,
      "productId": this.actRouterdata.id
    }).subscribe()
  }
}
