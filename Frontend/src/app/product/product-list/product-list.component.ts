import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 
  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
