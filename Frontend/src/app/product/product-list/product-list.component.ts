import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [
    {
      "Id": 1,
      "Name": "Mug",
      "Price": 120
    },
    {
      "Id": 2,
      "Name": "Shirt",
      "Price": 150
    },
    {
      "Id": 3,
      "Name": "Watch",
      "Price": 200
    },
    {
      "Id": 4,
      "Name": "Mobile",
      "Price": 1000
    },
    {
      "Id": 5,
      "Name": "Shoes",
      "Price": 500
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
