import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatblogComponent } from './creatblog.component';

describe('CreatblogComponent', () => {
  let component: CreatblogComponent;
  let fixture: ComponentFixture<CreatblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
