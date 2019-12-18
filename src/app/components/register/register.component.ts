import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {UserDTO} from '../../models/UserDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private successMessage = '';
  private errorMessage = '';

  private formDataClass = new FormDataClass();

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  registerFunction(formData) {
    const user = new UserDTO(this.formDataClass.login, this.formDataClass.password, this.formDataClass.name, this.formDataClass.surname);

    if(this.formDataClass.password !== this.formDataClass.passwordRepeat) {
      this.successMessage = '';
      this.errorMessage = 'Podane hasła nie są takie same';
      this.formDataClass.password = '';
      this.formDataClass.passwordRepeat = '';
    } else {
      this.authService.register(user).subscribe(
        () => {
          this.successMessage = 'Konto zostało założone';
          this.errorMessage = '';
          this.formDataClass.clear();
          formData.reset();
        },
        (error) => {
          this.successMessage = '';

          if (error.status === 409) {
            this.errorMessage = 'Konto o takim loginie istnieje';
            this.formDataClass.login = '';
          } else {
            this.errorMessage = 'Nie można założyć konta, spróbuj ponownie później';
            this.formDataClass.clear();
            formData.reset();
          }
        });
    }
  }
}

class FormDataClass {
  constructor(
    public name?,
    public surname?,
    public login?,
    public password?,
    public passwordRepeat?
  ) {

  }

  clear(){
    this.name = '';
    this.surname = '';
    this.login = '';
    this.password = '';
    this.passwordRepeat = '';
  }
}
