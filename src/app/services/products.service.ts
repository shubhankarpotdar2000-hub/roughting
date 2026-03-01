import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { Observable, of } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 ProductArr: Array<Iproduct> = [
  {
    pname: 'Laptop',
    pid: 'p101',
    pstatus: 'In-progress',
    canReturn: 0
  },
  {
    pname: 'Mobile',
    pid: 'p102',
    pstatus: 'Delivered',
    canReturn: 1
  },
  {
    pname: 'Shoes',
    pid: 'p103',
    pstatus: 'Dispatched',
    canReturn: 0
  },
  {
    pname: 'Watch',
    pid: 'p104',
    pstatus: 'Delivered',
    canReturn: 1
  }
];
  constructor(
    private _spinnerservice : SpinnerService
  ) { }

  fetchproducts(): Observable<Iproduct[]>{
    return of(this.ProductArr)
  }

  fetchproductById(id:string) : Observable<Iproduct>{
    let product : Iproduct = this.ProductArr.find(p =>p.pid === id)!
    return of(product)
  }

  createproduct(product : Iproduct): Observable<Iproduct>{
    this.ProductArr.unshift(product)
    return of(product)
  }

  updateproduct(updateproduct: Iproduct): Observable<Iproduct>{
    let getIndex = this.ProductArr.findIndex(t=>t.pid === updateproduct.pid)
    this.ProductArr[getIndex] = updateproduct
    return of(updateproduct)
  }

  removepro(id: string){
    let getIndex = this.ProductArr.findIndex(t=>t.pid === id)
    let remove = this.ProductArr.splice(getIndex,1)
    
    return of(remove[0])
  }

  

 
}