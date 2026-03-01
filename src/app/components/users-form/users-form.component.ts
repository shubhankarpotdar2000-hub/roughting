import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  userId ! : string
  editObj !: IUser
  isInEditMode : boolean = false;

  usersForm !: FormGroup

  userRoles: string[] = ['admin', 'candidate', 'hr', 'manager'];

ExpYersArr: string[] = [
  "1","2","3","4","5"
];

  constructor(
    private _userservice : UsersService,
    private _router: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.creatForm()
    this.onAddSkills()
      this.addressControl()
      this.checkAddSame()
    
    this.onAddNew()
    this.patchdata()
    
  }

  

  creatForm() {
    this.usersForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userRole: new FormControl('candidate'),
      profileDescription: new FormControl(null, [Validators.required]),
      profileImage: new FormControl(null, [Validators.required]),
      experienceYears: new FormControl(null, [Validators.required]),
      isActive: new FormControl(true, [Validators.required]),
      isAddSame: new FormControl({ value: false, disabled: true }),
      skills: new FormArray([new FormControl(null,[Validators.required])]),



      address: new FormGroup({
        current: new FormGroup({
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          country: new FormControl(null, [Validators.required]),
          zipcode: new FormControl(null, [Validators.required]),
        }),
        permanent: new FormGroup({
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          country: new FormControl(null, [Validators.required]),
          zipcode: new FormControl(null, [Validators.required]),
        })
      })
    })

    
  }

  get controls(){
    return this.usersForm.controls
  }

  get skillsArr(){
    return this.usersForm.get('skills') as FormArray
  }

  onAddSkills(){
    let control = new FormControl(null, [Validators.required]);
    this.skillsArr.push(control)
  }

  onRemove(i : number){
    this.skillsArr.removeAt(i)
  }

  addressControl(){
    this.controls['address'].get('current')?.valueChanges
    .subscribe(res =>{
      if(this.controls['address'].get('current')?.valid){
        this.controls['isAddSame'].enable({emitEvent : false})

      }else{
        this.controls['isAddSame'].disable({emitEvent : false})
        this.controls['isAddSame'].reset()
      }
    })

    this.controls['isAddSame'].valueChanges
    .subscribe(res=>{
      if(res){
        let current = this. controls['isAddSame '].get('current')?.value;
        this.controls['address'].get('permanent')?.patchValue(current)
        this.controls['address'].get('permanent')?.disable({emitEvent: false})

      }else{
        this.controls['address'].get('permanent')?.enable({emitEvent: false})
        this.controls['address'].get('permanent')?.reset()

      }
    })
  }

  checkAddSame(){
    let currentAdd = this.controls['address'].get('current')?.value
    let permanentAdd = this.controls['address'].get('permanent')?.value
    if(this.controls['address'].get('current')?.valid){
      this.controls['isAddSame'].enable({emitEvent: false})
    }

    const isSame = JSON.stringify(currentAdd) === JSON.stringify(permanentAdd)

    if(isSame && this.controls['isAddSame'].get('current')?.valid){
      this.controls['isAddSame'].enable({emitEvent: false})
      this.controls['isAddSame'].setValue(true, {emitEvent: false})
      this.controls['address'].get('permanent')?.enable({emitEvent: false})
    }else{
      this.controls['isAddSame'].disable({emitEvent: false})
      this.controls['isAddSame'].reset(null,{emitEvent: false})
      this.controls['address'].get('permanent')?.enable({emitEvent: false})
    }
  }

                                                                                                   
  onAddNew(){
if(this.usersForm.valid){
  let val = {
    ...this.usersForm.getRawValue(),

    userId: Date.now().toString()  
  }

  this._userservice.addusers(val).subscribe({
    next:  data =>{
      console.log(data);
      this.usersForm.reset()
    }
  })

  this._route.navigate(['users'])


}

  }

  onUpdate(){
    if(this.usersForm.valid){
      let updateObj : IUser = {
          ...this.usersForm.getRawValue(),
          userId : this.userId

      }

      this._userservice.updateuser(updateObj).subscribe({
        next: data =>{
          console.log(data);
          this._route.navigate(['/'])
          
        },
        error : err =>{
          console.log(err);
          
        }
        
      })

    }
  }

  patchdata(){
    this.userId = this._router.snapshot.paramMap.get('usersId')!
    if(this.userId){
      console.log(this.userId);
      this.isInEditMode = true 
      this._userservice.fetchsingleid(this.userId).subscribe({
        next: data =>{
          this.editObj = data 
          console.log(data);
          
          this.usersForm.patchValue({...this.editObj,skillsArr:[]})
        }
      })
      

      
    }
  }

 

}
