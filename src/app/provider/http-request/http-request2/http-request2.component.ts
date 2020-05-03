import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-http-request2',
   templateUrl: './http-request2.component.html',
  styleUrls: ['./http-request2.component.scss']
 })

@Injectable()
export class HttpRequest2Component implements OnInit {

  loading: boolean;
  base: string = 'http://localhost:8084';
  loader;

  constructor(private _http: HttpClient) {
    this.loader = document.getElementById('httpRequest');
  }

  ngOnInit() {
  }

  public get(url: string, func: any, error?: any): void {
    this.execute(this._http.get(this.base + url, this.getOptions()), func, error);
  }

  public post(url: string, data: any, func: any, error?: any): void {
    this.execute(this._http.post(this.base + url, data, this.getOptions()), func, error);
  }

  public update(url: string, data: any, func: any, error?: any): void {
    this.execute(this._http.put(this.base + url, data, this.getOptions()), func, error);
  }

  public delete(url: string, func: any, error?: any): void {
    this.execute(this._http.delete(this.base + url, this.getOptions()), func, error);
  }

  public mediaPost(url: string, data: any, func: any, error?: any): void {
    this.execute(this._http.post(this.base + url, data, this.getMediaOptions()), func, error);
  }

  public put(url: string, data: any, func: any, error?: any): void {
    this.execute(this._http.put(this.base + url, data, this.getOptions()), func, error);
  }

  private execute(action: Observable<any>, func: any, error?: any) {
    this.loader.style.display = 'block';
    this.loading = true;
    action.subscribe(res => {
      this.loading = false;
      setTimeout(() =>
        this.loader.style.display = 'none', 200);
      func(res);
    }, e => {
      this.defaultError(e, error);
    });
  }

  private defaultError(e: Error, func: any) {
    this.loading = false;
    setTimeout(() =>
      this.loader.style.display = 'none', 200);

    if (func) {
      func(e);
      return;
    }
    console.log(e)
    var status = e['status'];

    if (status == 200) {
      swal('', e['error'].text, 'warning');
      return;
    }

    if (status == 400) {
      swal('', e['error'].message, 'warning');
      return;
    }

    if (status == 404) {
      swal('', 'Requested service is not available', 'error');
      return;
    }

    if (status == 500) {
      swal('', 'Requested service encountered an unexpected error', 'error');
      return;
    }

    swal('', 'Unexpected error occurred', 'error');
  }


  private getOptions() {
    return {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + String(localStorage.getItem("access_token"))
      })
    };
  }

  private getMediaOptions() {
    return {
      headers: new HttpHeaders({
        // 'Authorization': 'Bearer ' + String(localStorage.getItem("access_token"))
      })
    };
  }

}
