import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  // Agrega nuevo usuario
  public addNewUser(data: {nombre: string, fecha: string}) {
    return this.firestore.collection('people').add(data);
  }

  // Consulta todos los usuarios
  public getUsers() {
    return this.firestore.collection('people').snapshotChanges();
  }

   // Actualiza un usuario
   public updateUser(documentId: string, data: any) {
    return this.firestore.collection('people').doc(documentId).set(data);
  }
   // Eliminar usuario
   public deleteUser(documentId: string) {
     return this.firestore.collection('people').doc(documentId).delete();
   }
}
