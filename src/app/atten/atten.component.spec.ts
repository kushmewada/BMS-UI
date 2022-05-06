import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenComponent } from './atten.component';

describe('AttenComponent', () => {
  let component: AttenComponent;
  let fixture: ComponentFixture<AttenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
