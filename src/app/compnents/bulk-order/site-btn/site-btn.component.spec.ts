import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBtnComponent } from './site-btn.component';

describe('SiteBtnComponent', () => {
  let component: SiteBtnComponent;
  let fixture: ComponentFixture<SiteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
