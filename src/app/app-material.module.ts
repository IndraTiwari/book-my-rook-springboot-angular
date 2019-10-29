import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatRadioModule,
  MatDialogModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule]
})
export class AppMaterialModule { }
