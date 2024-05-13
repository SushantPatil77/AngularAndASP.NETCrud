import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailsfromComponent } from './studentdetailsfrom.component';

describe('StudentdetailsfromComponent', () => {
  let component: StudentdetailsfromComponent;
  let fixture: ComponentFixture<StudentdetailsfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdetailsfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentdetailsfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
