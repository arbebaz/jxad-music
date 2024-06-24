import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricistNotesComponent } from './lyricist-notes.component';

describe('LyricistNotesComponent', () => {
  let component: LyricistNotesComponent;
  let fixture: ComponentFixture<LyricistNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyricistNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LyricistNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
