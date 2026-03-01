import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
productArr : Iproduct[] = []
  constructor(
    private _productservice : ProductsService
  ) { }

  ngOnInit(): void {
    this._productservice.fetchproducts().subscribe({
      next: data =>{
        this.productArr = data
        console.log(data);
        
      }
    })
  }

}
