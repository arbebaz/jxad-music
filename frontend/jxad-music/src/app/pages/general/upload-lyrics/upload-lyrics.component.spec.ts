import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLyricsComponent } from './upload-lyrics.component';

describe('UploadLyricsComponent', () => {
  let component: UploadLyricsComponent;
  let fixture: ComponentFixture<UploadLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadLyricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
