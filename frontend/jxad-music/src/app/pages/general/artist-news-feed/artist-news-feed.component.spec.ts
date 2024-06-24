import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNewsFeedComponent } from './artist-news-feed.component';

describe('ArtistNewsFeedComponent', () => {
  let component: ArtistNewsFeedComponent;
  let fixture: ComponentFixture<ArtistNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistNewsFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
