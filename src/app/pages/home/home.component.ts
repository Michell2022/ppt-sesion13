import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // DECLARO MI VARIABLE DE TIPO STRING PARA EL MONTO QUE INGRESARA EL USUARIO
  palabra!:string;

  // DECLARO MI VARIABLE DE TIPO NUMBER PARA EL MONTO QUE INGRESARA EL USUARIO
  monto!:number;

  // CREO UNA VARIABLE PARA LA ETIQUETA OPTION QUE MOSTRARA UN QUE DEBE ELEGIR UN TIPO DE MODEDA
  opciones: string = "ninguna";



}
