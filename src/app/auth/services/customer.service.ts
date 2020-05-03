import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Customer } from 'src/app/models/customer';
import { environment } from '../../../environments/environment';
import { Customer } from '../../models/customer';



@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Customer[]>(`${environment.apiUrl}/customers`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/customers/` + id);
    }

    register(customer: Customer) {
        return this.http.post(`${environment.apiUrl}/customers/register-customer`, customer);
    }

    login(customer: Customer) {
        return this.http.post(`${environment.apiUrl}/customers/login-customer`, customer);
    }

    update(customer: Customer) {
        return this.http.put(`${environment.apiUrl}/customers/` + customer.id, customer);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/customers/` + id);
    }
}