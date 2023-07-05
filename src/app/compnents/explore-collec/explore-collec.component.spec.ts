import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCollecComponent } from './explore-collec.component';

describe('ExploreCollecComponent', () => {
  let component: ExploreCollecComponent;
  let fixture: ComponentFixture<ExploreCollecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCollecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreCollecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
