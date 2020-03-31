import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {NotificationService} from '../../shared/messages/notification.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
  }

  login() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        user => this.notificationService.notify(`Bem vindo, ${user.name}`),
        (response: HttpErrorResponse) => {
          this.notificationService.notify(response.error.message)
      })
  }
}
