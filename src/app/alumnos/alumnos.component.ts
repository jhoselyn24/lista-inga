import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/models/listaStudents.model'

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
 
  Students: Alumnos[] = [
    new Alumnos(1, 'jaden', 'lee', 'jaden@gmail.com', 16 , new Date('11/01/2019')),
    new Alumnos(2, 'kenia', 'lou', 'kenia@gmail.com', 18, new Date('06/01/2019')),
    new Alumnos(3, 'lucas', 'pinedo', 'lucas@gmail.com', 17, new Date('12/14/2019')),
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
