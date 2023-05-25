import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import ResultadoI from '@app/interface/resultado.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultadoService {
  constructor(private firestore: Firestore) {}

  addresultado(numero: ResultadoI) {
    //conexion a la bd
    const resultRed = collection(this.firestore, 'resultado');
    return addDoc(resultRed, numero);
  }
}
