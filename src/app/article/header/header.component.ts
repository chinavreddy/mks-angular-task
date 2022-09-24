import { Component, OnInit } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
} 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navigation: Nav[] = [
    {
        link: '/home',
        name: 'Home',
        exact: true
    },
    {
        link: '/post-articles',
        name: 'Post Articles',
        exact: false
    },
    {
        link: '/about-us',
        name: 'About Us',
        exact: false
    }
]

}

