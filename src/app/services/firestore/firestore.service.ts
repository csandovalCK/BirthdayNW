import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, Timestamp } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  constructor(private firestore: AngularFirestore) { }

  // Agrega nuevo usuario
  public addNewUser(data: {nombre: string, fecha: Date}) {
    return this.firestore.collection('people').add(data);
  }

  // Consulta todos los usuarios
  public getUsers() {
    return this.firestore.collection('people', ref => ref.orderBy('nombre', 'asc')).snapshotChanges();
  }

  public getUsersMonth() {
    return this.firestore.collection('people', ref => ref.orderBy('fecha', 'asc')).snapshotChanges();
  }

   // Actualiza un usuario
   public updateUser(documentId: string, data: any) {
    return this.firestore.collection('people').doc(documentId).set(data);
  }
   // Eliminar usuario
   public deleteUser(documentId: string) {
     return this.firestore.collection('people').doc(documentId).delete();
   }

   // Rol cumpleanos

   public addNewRol(data: {cumpleanero: string, fechaCumpleanos: Date, organizador1: string, organizador2: string}) {
      return this.firestore.collection('rol').add(data);
   }

   public getRolCumpleanos() {
      return this.firestore.collection('rol', ref => ref.orderBy('fechaCumpleanos', 'asc') ).snapshotChanges();
   }

   // Eliminar Rol
   public deleteRol(documentId: string) {
      return this.firestore.collection('rol').doc(documentId).delete();
   }
}
