import { Component, Input } from '@angular/core';
import { MessengerService } from '../../services/messenger.service';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  @Input() product : any 

  constructor(private msg: MessengerService) { }

  handleAddToCart() {
    this.msg.sendMsg(this.product)
  }
}
