import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private formDataClass: FormDataClass = new FormDataClass();
  private errorMessage: string = "";
  private successMessage: string = "";

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  changePassword(formData){
    if(this.formDataClass.newPassword !== this.formDataClass.newPasswordAgain) {
      this.successMessage = '';
      this.errorMessage = "Podane hasła nie są takie same";
      this.formDataClass.newPassword = '';
      this.formDataClass.newPasswordAgain = '';
    } else {
      this.httpService.changePassword(this.formDataClass.password, this.formDataClass.newPassword).subscribe(
        () => {
          this.successMessage = 'Hasło zostało zmienione';
          this.errorMessage = "";
        },
      (error) => {
          if (error.status === 401) {
            this.formDataClass.password = '';
            this.errorMessage = 'Podano błędne hasło';
          } else {
            this.formDataClass.clear();
            formData.reset();
            this.errorMessage = 'Nie można zmienić hasła, spróbuj ponownie później';
          }
      }
      );
    }
  }

}

class FormDataClass {
  constructor(
    public password?,
    public newPassword?,
    public newPasswordAgain?
  ) {
  }

  clear(){
    this.password = '';
    this.newPassword = '';
    this.newPasswordAgain = '';
  }
}
