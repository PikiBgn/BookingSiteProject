import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../general/auth/auth.service";

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.loginForm.invalid) return
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.authorize(email, password).subscribe()
  }

  private initForm() {
    let login = '';
    let password = '';

    this.loginForm = new FormGroup({
      'email': new FormControl(login, [Validators.required]),
      'password': new FormControl(password, [Validators.required]),
    });
  }

}
