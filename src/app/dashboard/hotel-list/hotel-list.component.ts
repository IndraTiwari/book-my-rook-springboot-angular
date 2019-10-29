import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService, Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  userName;
  bookRoom: FormGroup;
  others = [
    { name: 'BreakFast' },
    { name: 'Lunch' },
    { name: 'Snacks' },
    { name: 'Dinner' }
  ];
  minDate = new Date();
  constructor(private formBuilder: FormBuilder, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.bookingDetails();
   // this.userName = localStorage.getItem('username');
   //this.userName = this.cookieService.get('user');
   this.userName=Cookie.get('user');
  }

  bookingDetails() {
    this.bookRoom = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      noOfPerson: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      others: ['']
    });
  }
  onCancel() {
    this.router.navigate(['/login']);
   // localStorage.removeItem('username')
   //this.cookieService.delete('user');
   Cookie.delete('user');
  }


}
