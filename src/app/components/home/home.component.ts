import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //to fetch list of shops from BE with their icon i.e. network imagges and display dynamically

  color = 'defaultdark';
  showSettings = true;
  showMinisidebar = false;
  showDarktheme = true;

  public innerWidth: any;


  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard/dashboard1']);
    }
    this.handleLayout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleLayout();
  }

  toggleSidebar() {
    this.showMinisidebar = !this.showMinisidebar;
  }

  getUserEmail() {
    return localStorage.getItem('email');
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/');
  }

  onImageClick(event){
    console.log(event);    
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.showMinisidebar = true;
    } else {
      this.showMinisidebar = false;
    }
  }
}
