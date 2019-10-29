import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VERSION, MatDialogModule, MatDialog, MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { SpinnerService } from '../shared/spinner.service';
import { CookieService, Cookie } from 'ng2-cookies';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,
     private router: Router, private spinnerService: SpinnerService,
     private cookieService: CookieService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginData();
  }

  loginData() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]]
    });
  }
  openRegister() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px',
      height: '400px',
      hasBackdrop: false
    });
  }

  onLogin() {
    this.spinnerService.show();
    this.router.navigate(['/dashboard']);
    //localStorage.setItem('username', this.loginForm.value.username);
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
 //   this.cookieService.set('user',this.loginForm.value.username);
  Cookie.set('user',this.loginForm.value.username) 
}

  //  onLogin(){
  //    this.loginService.loginGoogle().subscribe(response => {
  //      console.log('response after login',response);
  //    })
  //  }

}
