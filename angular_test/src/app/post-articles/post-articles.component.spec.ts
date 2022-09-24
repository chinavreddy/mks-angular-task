import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostArticlesComponent } from './post-articles.component';

describe('PostArticlesComponent', () => {
  let component: PostArticlesComponent;
  let fixture: ComponentFixture<PostArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
