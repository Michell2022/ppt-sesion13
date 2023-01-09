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

  //CREANDO MI OBJETO 
  myobjeto:any=[  
    {
      "Apellido":"Arcila",
      "Casado":false,
      "Dirección":"Calle 35 # 43 28",
      "Nombre":"Diego",
      "Teléfono":3859720
    },
    {
      "Apellido":"Bueno",
      "Casado":false,
      "Dirección":"CR 16A # 53 28",
      "Nombre":"Kevin",
      "Teléfono":31485579954
    },
    {
      "Apellido":"Palomino",
      "Casado":false,
      "Dirección":"CR 25 # 52 33",
      "Nombre":"Natalia",
      "Teléfono":32255945555
    }
  ];
}
