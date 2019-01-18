import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

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
  mesActual: string;
  dt = new Date();
  public people = [];
  displayedColumns: string[] = ['name', 'fecha'];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.title = MESES[this.dt.getMonth()].mes;
    this.mesActual = String(this.dt.getMonth() + 1);
    this.firestoreService.getUsersMonth().subscribe((peopleSnapshot) => {
      this.people = [];
      peopleSnapshot.forEach((peopleData: any) => {
          this.people.push({
            id: peopleData.payload.doc.id,
            data: peopleData.payload.doc.data()
          });
      });
    });
  }

  mesesSonIguales( mesPersona) {
     return this.mesActual === mesPersona;
  }

}
