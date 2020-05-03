import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { first } from 'rxjs/operators';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
            // reset login status
            this.authenticationService.logout();
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            console.log('returnUrl' , this.returnUrl);
            if(this.returnUrl == '\/') {
              this.returnUrl = '/home';           
            }            
  }

  onLoginFormSubmit(value) {
    console.log(value)
    this.submitted = true;

    this.loading = true;
    this.authenticationService.login(value.email, value.password)
        .pipe(first())
        .subscribe(
            data => {
                console.log("success");
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.log("error");
                Swal('Error', 'incorrect username or password', 'error');
                this.loading = false;
            });
  }

}
