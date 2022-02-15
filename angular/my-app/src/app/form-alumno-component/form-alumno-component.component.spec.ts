import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnoComponentComponent } from './form-alumno-component.component';

describe('FormAlumnoComponentComponent', () => {
  let component: FormAlumnoComponentComponent;
  let fixture: ComponentFixture<FormAlumnoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlumnoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlumnoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
