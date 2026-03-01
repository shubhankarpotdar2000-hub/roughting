import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const matArr = [CommonModule,MatButtonModule,MatCardModule,MatChipsModule,MatDialogModule
  ,MatIconModule,MatProgressSpinnerModule,MatSnackBarModule
]



@NgModule({
  declarations: [],
  imports: [...matArr],
  exports: [...matArr]
    
  
})
export class MaterialModule { }
