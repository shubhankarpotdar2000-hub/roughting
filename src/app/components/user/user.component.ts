import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UsersService } from 'src/app/services/users.service';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
id !: string
object !: any
  constructor(
    private _routes : ActivatedRoute,
    private _router : Router,
    private _usersservice : UsersService,
    private _snackbar : SnackbarService,
    private _matdialog : MatDialog
  ) { }

  ngOnInit(): void {

    this.fetchsingledata()
  }

  fetchsingledata(){
    this.id = this._routes.snapshot.params['usersId']
    if(this.id){
      this._usersservice.fetchsingleid(this.id).subscribe({
        next : data =>{
          this.object = data 
          console.log(data);
          
          


        },
        error : err =>{
          console.log(err);
          
        }

      })

    }
  }



  OnRemove(id:string){
    let matconfig = new MatDialogConfig()
    matconfig.data = `Are you sure you want to remove this user with id ${id}?`
    let matref = this._matdialog.open(GetconfirmComponent,matconfig)
    .afterClosed().subscribe((flag :boolean)=>{
      if(flag){
        this._usersservice.onremoveuser(id).subscribe(res =>{
          this._router.navigate(['/'])
          this._snackbar.opensnackbar(`The usercard with id ${id} is removed successfully`)
        })
      }
    })
  }

}
