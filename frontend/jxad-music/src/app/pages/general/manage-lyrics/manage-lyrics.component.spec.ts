import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLyricsComponent } from './manage-lyrics.component';

describe('ManageLyricsComponent', () => {
  let component: ManageLyricsComponent;
  let fixture: ComponentFixture<ManageLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageLyricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
