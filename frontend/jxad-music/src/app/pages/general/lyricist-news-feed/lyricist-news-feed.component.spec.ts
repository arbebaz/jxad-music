import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricistNewsFeedComponent } from './lyricist-news-feed.component';

describe('LyricistNewsFeedComponent', () => {
  let component: LyricistNewsFeedComponent;
  let fixture: ComponentFixture<LyricistNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyricistNewsFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LyricistNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
