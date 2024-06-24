import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerateContentComponent } from './moderate-content.component';

describe('ModerateContentComponent', () => {
  let component: ModerateContentComponent;
  let fixture: ComponentFixture<ModerateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModerateContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModerateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
