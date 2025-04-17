import { Component, inject } from '@angular/core';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = ""
  password: string = ""
  auth : Auth = inject(Auth)
  error: any = {
    username: "",
    password: "",
    isError: false
  }
  constructor() {

  }
  ValidateInput(event: any, type: string) {
    this.error[type] = event.target.value.length === 0 ? `${type} is required` : ''
    this.error.isError = event.target.value.length === 0
  }
  AddData() {
    console.log(this.error)
    if (!this.error.isError) {
        // await signInWithEmailAndPassword(this.auth,this.username,this.password)
    } else {
      alert("Invalid input data")
    }

  }

}
