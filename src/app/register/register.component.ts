import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VERSION, MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
    this.registerData();
  }

  registerData() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      username: [''],
      gender: [''],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      contactNo: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      govtId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  

}
