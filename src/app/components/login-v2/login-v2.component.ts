import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss']
})
export class LoginV2Component implements OnInit {

  submitted = false;
  registered = true;
  userModel = new User('', '');

  constructor(private router: Router) { }
 
  ngOnInit() {
  }


  onLoginSubmit(){
    this.submitted = true;
    console.log(this.userModel);
    if(this.userModel.username == "nyasha" && this.userModel.password=="nyasha")
       this.router.navigate(['/full']);
    else
       alert("Incorrect username and password");
       this.submitted = false;
  }

  onRegisterSubmit(){
    this.submitted = true;
    console.log(this.userModel);

  }

  registeredProcess(){
    console.log("i was clicked")
    this.registered = !this.registered;
  }

}

export class User{
  username: string;
  password: string;

  constructor(username: string, password: string){

  }
}
