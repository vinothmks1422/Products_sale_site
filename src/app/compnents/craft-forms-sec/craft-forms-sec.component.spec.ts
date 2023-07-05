import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftFormsSecComponent } from './craft-forms-sec.component';

describe('CraftFormsSecComponent', () => {
  let component: CraftFormsSecComponent;
  let fixture: ComponentFixture<CraftFormsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftFormsSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftFormsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
