import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';
import { increment } from '../article.actions';
import {Router} from "@angular/router";

export interface Articles {
  id: number;
  title: string;
  author: string;
  description: string;
  thump_img: string;
  poster_img: string;
}
@Component({
  selector: 'app-post-articles',
  templateUrl: './post-articles.component.html',
  styleUrls: ['./post-articles.component.css'],
})
export class PostArticlesComponent {
  public thump_img_url!: any;
  public poster_img_url!: any;
  count$;
  constructor(
    private store: Store<{ count: any }>,
    public DomSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.count$ = store.select('count');
    console.log(this.count$);
  }
  profileForm!: FormGroup;
  ngOnInit() {
    this.profileForm = new FormGroup({
      id: new FormControl(new Date().getUTCMilliseconds()),
      title: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      author: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      thump_img: new FormControl(''),
      poster_img: new FormControl(''),
    });
  }

  imgToBase64(event: Event | null | undefined, img_type: string) {
    const target = event?.target as HTMLInputElement;
    const file: any = target?.files;
    const reader = new FileReader();
    reader.onload = () => {
      if (img_type === 'thump_img_url')
        this.thump_img_url = reader?.result?.toString();
      else this.poster_img_url = reader?.result?.toString();
    };
    reader.readAsDataURL(file[0]);
  }

  onSubmit() {
    let profileData: Articles = this.profileForm.value;
     profileData.thump_img = this.thump_img_url;
     profileData.poster_img = this.poster_img_url;
    this.store.dispatch(increment(profileData));
    this.router.navigate(['/']);
  }
}
