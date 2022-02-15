import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Alumno } from '../models/alumno';

import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-form-alumno-component',
  templateUrl: './form-alumno-component.component.html',
  styleUrls: ['./form-alumno-component.component.css']
})
export class FormAlumnoComponentComponent implements OnInit {
  constructor(
    private alumnoService: AlumnoService,
    private formBuilder: FormBuilder,
  ) { }
  alumnoGroup = this.formBuilder.group({
    nombre: '',
    apellidos: '',
    edad: 0,
    email: ''
  });

  ngOnInit(): void {
  }
  onSubmit(): void {
    
  }
}
