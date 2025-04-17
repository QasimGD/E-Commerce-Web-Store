import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {Auth, createUserWithEmailAndPassword} from '@angular/fire/auth'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username : string = ''
  password : string = ''
  auth : Auth = inject(Auth)

  async AddData (){
      await createUserWithEmailAndPassword(this.auth,this.username,this.password)
      alert('New user account is created')
  }
}





// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })

// export class SignupComponent implements OnInit{
// // signupForm:FormGroup
//  ngOnInit(): void {
//   //  this.signupForm=new FormGroup({
//   //   "fullName":new FormControl(null,Validators.required),
//   //   "username":new FormControl(null,[Validators.required,Validators.email]),
//   //   "password":new FormControl(null,[Validators.required,Validators.minLength(4)]),
    
    
//   //  })
//  }
  

// onSubmit(){
//   console.log(this.signupForm)
// }
  
// }
