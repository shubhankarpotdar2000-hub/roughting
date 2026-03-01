import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
productId !: string
productObj !: Iproduct
  constructor(
    private _routes : ActivatedRoute,
    private _productservice : ProductsService,
    private _matdialog: MatDialog,
    private _router : Router,
    private _snackbar: SnackbarService,
    private spinnerservice: SpinnerService
  ) { }

  ngOnInit(): void {
    this.productId = this._routes.snapshot.params['productId']
    this._productservice.fetchproductById(this.productId)
    .subscribe({
      next: data =>{
        this.productObj = data
      },
      error : err =>{
        console.log(err);
        
      }
    })
  }

  onRemove(){
     this.spinnerservice.show()
    let matconfig = new MatDialogConfig()
    matconfig.data = `Are you sure you want to remove this product with id ${this.productId} `
    let matref = this._matdialog.open(GetconfirmComponent, matconfig)
    .afterClosed().subscribe((flag)=>{
      if(flag){
        this._productservice.removepro(this.productId).subscribe(res =>{
          this._router.navigate(['/products'])
           this.spinnerservice.hide()
          this._snackbar.opensnackbar(`The product with id ${this.productId} is removed successfully`)
          
        })
      }
    })

  }
}
