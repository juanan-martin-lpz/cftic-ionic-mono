import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'angular-repo-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnInit {
  public dni: string;
  public dniok: boolean;
  public mensajeError: string;
  public showError: boolean;

  constructor() {
    this.dni = '';
    this.dniok = false;
    this.mensajeError = '';
    this.showError = false;
  }

  // Arrays varios
  private readonly letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  private readonly letrasExt = 'XYZ';

  // Obtiene la letra del dni pasado. El ultimo digito mas bien
  private letra(dni: string): string {
    return dni[dni.length - 1];
  }

  // Obtiene el numero sin letra. Mas bien todo menos el ultimo digito
  numero(dni: string): number {
    return parseInt(dni.substring(0, dni.length - 1));
  }

  // Validamos si el dni pertenece a extranjero
  private validExtFormat(dni: string): boolean {
    return dni.startsWith('X') || dni.startsWith('Y') || dni.startsWith('Z');
  }

  // Sustituimos la letra de extranjero por su valor
  private substituteExt(dni: string): string {
    return `${this.letrasExt.search(dni[0])}${dni.substring(1)}`;
  }

  // Validamos si el dni pertenece a nacional
  private validNacFormat(dni: string): boolean {
    return this.letras.includes(this.letra(dni).toUpperCase());
  }

  public comprobarDni(): void {
    // Comprobar nacional o extranjero
    // Extranjero
    const finaldni = this.validExtFormat(this.dni)
      ? this.substituteExt(this.dni)
      : this.dni;

    // Nacional
    if (this.validNacFormat(finaldni)) {
      if (this.validDni(finaldni)) {
        // Mostramos el mensaje
        //console.log("DNI ok");
        this.dniok = true;
        this.showMessage('DNI ok');
      } else {
        // Mostramos error
        //console.log("Dni error");
        this.dniok = false;
        this.showMessage('DNI incorrecto');
      }
    } else {
      //console.log("Error de formato");
      this.dniok = false;
      this.showMessage('Error en el formato del DNI');
    }
  }

  showMessage(msg: string): void {
    this.showError = true;
    this.mensajeError = msg;
  }

  // Validamos la validez del dni pasado
  validDni(dni: string): boolean {
    const indice = this.numero(dni) % 23;
    return this.letras[indice] == this.letra(dni) ? true : false;
  }

  clearUI() {
    this.showError = false;
    this.mensajeError = '';

    this.dni = '';
    this.dniok = false;
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
