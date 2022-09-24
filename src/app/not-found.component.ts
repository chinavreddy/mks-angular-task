import { Component } from "@angular/core";

@Component({
    selector:"not-found",
    template:`<div class="text-center">
        <h3>Opps..</h3><br>
        <p>404! Not Found go to <a routerLink="/">Home</a></p>
  </div>`
})

export class NotFoundComponent{

}