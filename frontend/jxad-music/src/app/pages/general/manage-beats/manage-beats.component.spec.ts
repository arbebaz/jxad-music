import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBeatsComponent } from './manage-beats.component';

describe('ManageBeatsComponent', () => {
  let component: ManageBeatsComponent;
  let fixture: ComponentFixture<ManageBeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageBeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
