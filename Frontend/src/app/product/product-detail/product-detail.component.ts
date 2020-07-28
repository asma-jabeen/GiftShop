import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId: number;

  constructor(private route: ActivatedRoute, public service: ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.service.getProduct(this.productId);
  }

}
