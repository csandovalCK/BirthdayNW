import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import {MatSnackBar} from '@angular/material';

export interface PeriodicElement {
  name: string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Christian Jesus Sandoval Garibaldi', fecha: '01/08/1991'},
  {name: 'Nadia', fecha: '09/03/1987'},
  {name: 'Vero', fecha: '04/10/1982'},
  {name: 'Felix', fecha: '05/23/1979'},
  {name: 'Berenice Rios', fecha: '30/10/1987'},
  {name: 'Roberto', fecha: '03/24/1990'},
  {name: 'Krishna Carranza', fecha: '30/08/1974'},
  {name: 'Joel', fecha: '01/09/1979'},
  {name: 'Mario', fecha: '03/11/1985'},
  {name: 'Claudia', fecha: '12/07/1989'},
  {name: 'Cesar', fecha: '08/10/1973'}
];

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'fecha'];
  dataSource = ELEMENT_DATA;
  step = 0;

  public people = [];

  public documentId = null;
  public currentStatus = 1;


  constructor(private firestoreService: FirestoreService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.firestoreService.getUsers().subscribe((peopleSnapshot) => {
      this.people = [];
      peopleSnapshot.forEach((peopleData: any) => {
        this.people.push({
          id: peopleData.payload.doc.id,
          data: peopleData.payload.doc.data()
        });
      });
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  save() {
    this.step++;
  }

  public newUser(nombreForm, fechaForm, documentId = this.documentId) {
    if (nombreForm === '' && fechaForm === '' ) {
        this.snackBar.open('Capture todos los datos', '', {
          duration: 2000,
        });
    } else {
      console.log(`Status: ${this.currentStatus}`);
      if (this.currentStatus === 1) {
        const data = {
          nombre: nombreForm,
          fecha: fechaForm
        };
        this.firestoreService.addNewUser(data).then(() => {
          console.log('Documento creado exitósamente!');
        }, (error) => {
          console.error(error);
        });
      }
    }
  }

  public deleteUser(documentId) {
    this.firestoreService.deleteUser(documentId).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }

}
