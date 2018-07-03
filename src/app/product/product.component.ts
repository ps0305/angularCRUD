import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private http: Http) {}
  confirmationString: string = 'New Product has been Added !!';
  isAdded: boolean = false;
  productObj: object = [];

  addNewProduct = function(product) {
    this.productObj = {
      p_id: product.p_id,
      p_name: product.p_name,
      p_cost: product.p_cost
    };
    this.http
      .post('http://localhost:5555/products/', this.productObj)
      .subscribe((res: Response) => {
        this.isAdded = true;
      });
  };
  ngOnInit() {}
}
