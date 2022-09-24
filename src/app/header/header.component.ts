import { Component, OnInit } from '@angular/core';
interface Nav{
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  nav : Nav[] = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "/post-articles",
      name: "Post Article",
      exact: false
    },
    {
      link: "/about-us",
      name: "About Us",
      exact: false
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
