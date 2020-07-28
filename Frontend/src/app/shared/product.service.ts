import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData: Product;
  readonly rootURL = 'http://localhost:50247/api';
  list: Product[];
  product: Product; 

  constructor(private http: HttpClient) { }

  getProduct(id) {
    return this.http.get(this.rootURL + '/Product/' + id)
      .toPromise()
      .then(res => this.product = res as Product);
  }

  postProduct() {
    return this.http.post(this.rootURL + '/Product', this.formData);
  }
  putProduct() {
    return this.http.put(this.rootURL + '/Product/' + this.formData.Id, this.formData);
  }
  deleteProduct(id) {
    return this.http.delete(this.rootURL + '/Product/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Product')
      .toPromise()
      .then(res => this.list = res as Product[]);
  }
}
