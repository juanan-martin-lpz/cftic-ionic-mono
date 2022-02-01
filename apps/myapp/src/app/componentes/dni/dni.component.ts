import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

  constructor() { }

  // Arrays varios
  private letras: string = "TRWAGMYFPDXBNJZSQVHLCKE";
  private letrasExt: string = "XYZ";

  // Obtiene la letra del dni pasado. El ultimo digito mas bien
  private letra(dni : string): number {
    return parseInt(dni[dni.length - 1]);
  }


  // Validamos si el dni pertenece a extranjero
  private validExtFormat(dni : string): boolean {
    return (dni.startsWith("X") || dni.startsWith("Y") || dni.startsWith("Z"));
  }

  // Sustituimos la letra de extranjero por su valor
  private substituteExt(dni: string): string {
    return `${this.letrasExt.search(dni[0])}${dni.substring(1)}`;
  }

  // Validamos si el dni pertenece a nacional
  private validNacFormat(dni: string): boolean {

    return this.letras.includes(this.letra(dni).toUpperCase());

  }

  comprobarDni(e: any): void {

    e.preventDefault();


    // Obtenemos dni
    //let dni = obtenerDni();

    let dni = "1234567";

    // Comprobar nacional o extranjero
    // Extranjero
    let finaldni = this.validExtFormat(dni) ? this.substituteExt(dni) : dni;

    // Nacional
    if (this.validNacFormat(finaldni)) {
        if (this.validDni(finaldni)) {
            // Mostramos el mensaje
            //console.log("DNI ok");
            //showMessage("DNI ok");
        } else {
            // Mostramos error
            //console.log("Dni error");
            //showMessage("DNI incorrecto");
        }
    } else {
        //console.log("Error de formato");
        //showMessage("Error en el formato del DNI");
    }
  }
  // Validamos la validez del dni pasado
  validDni(dni: string): boolean {

    let indice = numero(dni) % 23;
    return (letras[indice] == letra(dni)) ? true : false;
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }
}
