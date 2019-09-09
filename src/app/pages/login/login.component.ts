import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AuthenticationService} from '../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  usernamePlaceHolder = 'Username';
  passwordPlaceHolder = 'Password';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  // access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
        this.usernamePlaceHolder = 'Username is required';
        this.passwordPlaceHolder = 'Password is required';
        return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  if(this.returnUrl){
                    this.router.navigate([this.returnUrl]);
                  }
                  var uinfor = JSON.parse(localStorage.getItem("currentUser"));
                  if(uinfor.role === 'Admin'){
                    this.router.navigate(['admin']);
                  }
                  if(uinfor.role === 'User'){
                    this.router.navigate(['user']);
                  }
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }
  ngOnDestroy() {
  }

}
