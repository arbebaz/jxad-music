import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatmakerNotesComponent } from './beatmaker-notes.component';

describe('BeatmakerNotesComponent', () => {
  let component: BeatmakerNotesComponent;
  let fixture: ComponentFixture<BeatmakerNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatmakerNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatmakerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
