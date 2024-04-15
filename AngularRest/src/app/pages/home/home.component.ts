import { Component, OnInit } from '@angular/core';
import { FoodApiService } from '../../Services/food-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(public GetF: FoodApiService) {}
  
  ngOnInit(): void {
    this.GetFood()
  }

  public FoodApi:any

  GetFood() {
    this.GetF.GetAll().subscribe(data => {
      this.FoodApi = data
      console.log(data);
    })
  }



}
