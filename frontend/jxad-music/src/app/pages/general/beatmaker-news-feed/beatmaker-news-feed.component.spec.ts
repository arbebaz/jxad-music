import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatmakerNewsFeedComponent } from './beatmaker-news-feed.component';

describe('BeatmakerNewsFeedComponent', () => {
  let component: BeatmakerNewsFeedComponent;
  let fixture: ComponentFixture<BeatmakerNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatmakerNewsFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatmakerNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
