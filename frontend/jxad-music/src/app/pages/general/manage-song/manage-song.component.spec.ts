import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSongComponent } from './manage-song.component';

describe('ManageSongComponent', () => {
  let component: ManageSongComponent;
  let fixture: ComponentFixture<ManageSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
