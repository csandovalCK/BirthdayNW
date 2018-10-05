import { Component, OnInit } from '@angular/core';

export interface Meses {
  mes: string;
}

const MESES: Meses[] = [
  {mes: 'Enero'},
  {mes: 'Febrero'},
  {mes: 'Marzo'},
  {mes: 'Abril'},
  {mes: 'Mayo'},
  {mes: 'Junio'},
  {mes: 'Julio'},
  {mes: 'Agosto'},
  {mes: 'Septiembre'},
  {mes: 'Ocutbre'},
  {mes: 'Noviembre'},
  {mes: 'Diciembre'},
];

@Component({
  selector: 'app-birthdays-month',
  templateUrl: './birthdays-month.component.html',
  styleUrls: ['./birthdays-month.component.css']
})
export class BirthdaysMonthComponent implements OnInit {

  title;
  dt = new Date();

  constructor() { }

  ngOnInit() {
    this.title = MESES[this.dt.getMonth()].mes;
  }

}
