import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrProComponent } from './usr-pro.component';

describe('UsrProComponent', () => {
  let component: UsrProComponent;
  let fixture: ComponentFixture<UsrProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
