import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(private auth: AuthService, private storage: StorageService) {}

  ngOnInit(): void {}
  loginUser() {
    this.auth
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        (data: HttpResponse<any>) => {
          this.storage.stroreUserobject(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
