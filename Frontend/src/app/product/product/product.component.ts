import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  Product: any = {
    "Id": 1,
    "Name" : "Mug",
    "Price": 120
}
}
