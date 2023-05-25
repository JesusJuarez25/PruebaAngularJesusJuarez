import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Logger, UntilDestroy } from '@shared';
import { ResultadoService } from '@app/service/result.service';
import { any } from 'cypress/types/bluebird';
import { result } from 'cypress/types/lodash';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  prueba = new FormGroup({
    numero: new FormControl('', Validators.required),
  });
  resultado: any = [];

  constructor(private resulT: ResultadoService) {}

  ngOnInit() {}

  analizar() {
    //arreglos para guadar los numeros
    let pantalla: number[] = [];
    let BD: any[] = [];

    //se pasa el dato que proviene del formulario a un numero
    let numero = Number(this.form.numero);
    console.log(numero);

    //ciclo para determinar los mutiplos
    let a = 0;

    for (a = 1; a < numero + 1; a++) {
      if (a % 3 == 0) {
        console.log('multiplo de 3 ' + a);
        //Se añaden los numeros
        pantalla.push(a);
        BD.push(a);
      }
      if (a % 5 == 0) {
        console.log('multiplo de 5 ' + a);
        //Se añaden los numeros
        pantalla.push(a);
        BD.push(a);
      }

      if (a % 7 == 0) {
        console.log('multiplo de 7 ' + a);
        //Se añaden los numeros
        pantalla.push(a);
        BD.push(a);
      }
    }
    //Se añade el numero que se ingreso para guadarlo en la BD
    BD.push('El numero es ' + numero);

    //se asignan los valores en el arreglo para poder mostrar los en pantalla
    this.resultado = pantalla;
    console.log(pantalla);

    //Se transforman los arreglo a objectos(JSON)
    let resul: any[] = [BD]; // lista original ahora con el typo Any
    resul = resul.map((elem) => {
      return { resultado: elem };
    });
    console.log(resul);

    //Se manda los parametros al servico para insertarlos a la BD
    const ta = this.resulT.addresultado(resul[0]);
    console.log(ta);
  }

  //metodo para obtener los datos del formulario
  get form() {
    return this.prueba.value;
  }
}
