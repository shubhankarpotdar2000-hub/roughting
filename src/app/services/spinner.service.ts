import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

private spinnerstatus$ = new BehaviorSubject<boolean>(false)
spinnerstatusObs$ = this.spinnerstatus$.asObservable()

flag: any

show(){
  clearTimeout(this.flag)
  this.spinnerstatus$.next(true)
}

hide(){
  this.flag = setTimeout(()=>{
    this.spinnerstatus$.next(false)
  },400)
}
}
