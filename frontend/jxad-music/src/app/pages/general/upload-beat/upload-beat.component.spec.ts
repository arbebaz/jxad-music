import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBeatComponent } from './upload-beat.component';

describe('UploadBeatComponent', () => {
  let component: UploadBeatComponent;
  let fixture: ComponentFixture<UploadBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadBeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
