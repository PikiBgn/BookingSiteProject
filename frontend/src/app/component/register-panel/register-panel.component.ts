import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../general/auth/auth.service";

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css']
})
export class RegisterPanelComponent implements OnInit {

  registrationForm!: FormGroup;
  error: string = "";
  info: string = "";
  password = "";


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.registrationForm.invalid) return
    this.info = ""
    this.error = ""
    const firstName = this.registrationForm.value.firstName;
    const lastName = this.registrationForm.value.lastName;
    const password = this.registrationForm.value.password;
    const email = this.registrationForm.value.email;
    const birthdate = this.registrationForm.value.birthdate;

    this.authService.createNewUser(firstName,lastName, password, email,birthdate).subscribe(
        (result) => {
          this.info = result.responseMessage
        }
    )
  }
  private initForm() {
    let firstName = '';
    let lastName = '';
    let password = '';
    let email = '';
    let passwordRepeat = '';
    let birthdate = '';

    this.registrationForm = new FormGroup({
      'firstName': new FormControl(firstName, [Validators.required]),
      'lastName': new FormControl(lastName, [Validators.required]),
      'email': new FormControl(email, [Validators.required]),
      'birthdate': new FormControl(birthdate, [Validators.required]),
      'password': new FormControl(password, [Validators.required]),
      'passwordRepeat': new FormControl(passwordRepeat, [Validators.required]),
    }, null);
  }

}
