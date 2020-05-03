import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Customer } from '../../models/customer';



@Injectable()
export class AuthenticationService {
    customer: Customer = new Customer();

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        console.log(username, password);
        
        return this.http.post<any>(`${environment.apiUrl}/customers/login-customer`, { email: username, password: password })
            .pipe(map(customer => {
                // login successful if there's a jwt token in the response
                this.customer.username = customer.username;
                this.customer.token = customer.token;
                console.log(customer);   
                console.log(this.customer);              
                if (this.customer && this.customer.token) {
                    // store Customer details and jwt token in local storage to keep Customer logged in between page refreshes
                    localStorage.setItem('currentCustomer', JSON.stringify(this.customer));
                }
                return Customer;
            }));
    }

    logout() {
        // remove Customer from local storage to log Customer out
        localStorage.removeItem('currentCustomer');
    }
}