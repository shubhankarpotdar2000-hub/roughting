import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  isInEditMode : boolean = false
  productId !: string
  productForm ! : FormGroup

  constructor(
    private _routes : ActivatedRoute,
    private _productservice : ProductsService,
    private _snackbar : SnackbarService,
    private _router : Router
    
  ) { }

  ngOnInit(): void {
    this.createproductForm()
    this.setEditMode()
    this. patchdata()
  }

  createproductForm(){
    this.productForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      
      pstatus : new FormControl(null, [Validators.required]),
      canReturn : new FormControl(null, [Validators.required]),

    })
  }

  setEditMode(){
    this.productId = this._routes.snapshot.params['productId']
    if(this.productId){
      this.isInEditMode = true
    }else{
      this.isInEditMode = false
    }
  }

  onproductAdd(){
    if(this.productForm.valid){
      let productObj : Iproduct = {
        ...this.productForm.value,
        pid : Date.now().toString()
      }

      this._productservice.createproduct(productObj).subscribe({
        next: data =>{
          this._snackbar.opensnackbar(`The product with id ${data.pid} is added successfully`)
          this.productForm.reset()
          this._router.navigate(['products']
          
          )
        },
        error : err =>{
          this._snackbar.opensnackbar(err.msg)
        }
      })
    }
  }


  onUPdatep(){
    if(this.productForm.valid){
      let upobj : Iproduct = {
        ...this.productForm.value,
        pid : this.productId
      }
      this._productservice.updateproduct(upobj).subscribe({
        next : data =>{                                                             
          this._router.navigate(['/products'])
          this._snackbar.opensnackbar(`The product with id ${upobj.pid} is updated successfully`)
        },
        error : err=>{
          console.log(err);
          
        }
      })
    }
  }

  patchdata(){
    this.productId = this._routes.snapshot.paramMap.get('productId')!
    if(this.productId){
      this._productservice.fetchproductById(this.productId).subscribe({
        next: data =>{
          this.isInEditMode = true
          this.productForm.patchValue(data)
         
        }
      })
    }
  }

}
