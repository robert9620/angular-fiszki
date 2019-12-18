import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private errorMessage = '';

  private formDataClass = new FormDataClass();

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  loginFunction(formData) {
    this.authService.login(this.formDataClass.login, this.formDataClass.password).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        sessionStorage.setItem('username', this.formDataClass.login);
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/biurko']);
      },
      (error) => {
        this.formDataClass.clear();

        if (error.status === 401) {
          this.errorMessage = 'Podano błędny login lub hasło';
        } else {
          formData.reset();
          this.errorMessage = 'Nie można się zalogować, spróbuj ponownie później';
        }
      }
    );
  }

}

class FormDataClass {
  constructor(
    public login?,
    public password?
  ) {
  }

  clear(){
    this.login = '';
    this.password = '';
  }
}
