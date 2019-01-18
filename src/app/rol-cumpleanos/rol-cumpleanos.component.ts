import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import {MatSnackBar} from '@angular/material';
import {FormControl, Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-rol-cumpleanos',
  templateUrl: './rol-cumpleanos.component.html',
  styleUrls: ['./rol-cumpleanos.component.css']
})
export class RolCumpleanosComponent implements OnInit {

  @ViewChild('organizador1') organizador1: ElementRef;
  @ViewChild('organizador2') organizador2: ElementRef;
  @ViewChild('fechaCumpleanos') fechaCumpleanos: ElementRef;
  @ViewChild('cumpleanero') cumpleanero: ElementRef;
  displayedColumns: string[] = ['cumpleanero', 'fecha', 'organizador1', 'organizador2'];
  public rol = [];
  public people = [];
  step = 0;
  selectedValue: string;
  public documentId = null;
  cumpleaneroControl = new FormControl('', [Validators.required]);
  public valorFecha;

  constructor(private firestoreService: FirestoreService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.firestoreService.getRolCumpleanos().subscribe((rolSnapshot) => {
      this.rol = [];
      rolSnapshot.forEach((rolData: any) => {
        this.rol.push({
          id: rolData.payload.doc.id,
          data: rolData.payload.doc.data()
        });
      });
    });

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

  public newRol(cumpleanero, fechaNacimiento, organizador1, organizador2, documentId = this.documentId) {
     console.log('cumpleanero ' + cumpleanero + ' fecha a guardar: ' + fechaNacimiento);
     if (cumpleanero === '' || fechaNacimiento === '' || organizador1 === '' || organizador2 === '') {
      this.snackBar.open('Capture todos los datos', '', {
        duration: 2000,
      });
     } else {
      if (cumpleanero === organizador1 || cumpleanero === organizador2) {
        this.snackBar.open('El cumpleanero no puede ser el mismo que los organizadores', '', {
          duration: 2000,
        });
      } else {
      const data = {
        cumpleanero: cumpleanero,
        fechaCumpleanos: new Date(fechaNacimiento),
        organizador1: organizador1,
        organizador2: organizador2,
      };
      this.firestoreService.addNewRol(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.cumpleanero.nativeElement = [];
        this.fechaCumpleanos.nativeElement.value = '';
        this.organizador1.nativeElement = [];
        this.organizador2.nativeElement = [];
      }, (error) => {
        console.error(error);
      });
      }
     }
  }

  public detleteRol(documentId) {
    this.firestoreService.deleteRol(documentId).then(() => {
         console.log('Rol eliminado');
    }, (error) => {
      console.error(error);
    });
  }

  public convertDate(fecha) {
    if (fecha != null) {
      this.valorFecha = fecha.toDate();
      const fecahConvert = fecha.toDate();
      console.log('muestra algo' + fecahConvert + ' valorFecha: ' + fecha);
      return fecahConvert;
    }
  }


}
