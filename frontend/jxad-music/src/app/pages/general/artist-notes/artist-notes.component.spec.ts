import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNotesComponent } from './artist-notes.component';

describe('ArtistNotesComponent', () => {
  let component: ArtistNotesComponent;
  let fixture: ComponentFixture<ArtistNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
