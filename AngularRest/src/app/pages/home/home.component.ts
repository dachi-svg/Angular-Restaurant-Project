import { Component, OnInit } from '@angular/core';
import { FoodApiService } from '../../Services/food-api.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(public GetF: FoodApiService, public router: Router) {}
  
  ngOnInit(): void {
    this.GetFood()
    this.getAllCategorise()
  }

  public FoodApi:any
  public allCategories:any

  GetFood() {
    this.GetF.GetAll().subscribe(data => {
      this.FoodApi = data
      console.log(data);
    })
  }

  public minprice:any = ""
  public maxprice:any = ""
  public pseudoMin:any
  public pseudoMax:any
  public name:any = ""

  Filter() {
    this.GetF.GetAll().subscribe((data:any) => {
      this.FoodApi = data.filter((res:any) => {
        if(this.minprice === "" || this.maxprice === "") {
          this.pseudoMin = 0
          this.pseudoMax = 100000
        } else {
          this.pseudoMax = this.maxprice
          this.pseudoMin = this.minprice
        }
        
        return this.pseudoMin <= res.price && this.pseudoMax >= res.price && res.name.includes(this.name)
      })
    })
  }

  public pQuantity:any

  addToCarter(item:any) {
    this.GetF.addToCart({
      "quantity": this.pQuantity,
      "price": item.price * this.pQuantity,
      "productId": item.id
    }).subscribe()
  }

  gotoDetails(item: any) {
    this.router.navigate(["/details"], {queryParams: item})
  }

  getAllCategorise() {
    this.GetF.getcategorise().subscribe(data => {
      this.allCategories = data
    })
  }

  FilterCategory(id:any) {
    console.log(123);
    this.GetF.getCategoryById(id).subscribe((data:any) => {
      this.FoodApi = data.products
    })
  }
}
