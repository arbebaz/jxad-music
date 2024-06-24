import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductionsComponent } from './explore-productions.component';

describe('ExploreProductionsComponent', () => {
  let component: ExploreProductionsComponent;
  let fixture: ComponentFixture<ExploreProductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreProductionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
