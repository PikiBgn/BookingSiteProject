import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../general/auth/auth.service";

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
  }

  onSubmit() {
    if (this.registrationForm.invalid) return
    this.info = ""
    this.error = ""
    const login = this.registrationForm.value.login;
    const password = this.registrationForm.value.password;
    const email = this.registrationForm.value.email;

    // this.authService.createNewUser(login, password, email).subscribe(
        // (result) => {
        //   this.info = result.responseMessage
        // }
    // )
  }

}
