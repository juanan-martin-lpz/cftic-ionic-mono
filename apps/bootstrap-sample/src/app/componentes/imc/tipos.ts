// Tipos usados por los componentes

// Funciones generales
export function between(a: number, b: number, valor: number) {
  return valor >= a && valor < b;
}
export function greater(a: number, valor: number) {
  return valor > a;
}
export function lesser(a: number, valor: number) {
  return !greater(a, valor);
}

export enum Tipologia {
  UNNASIGNED = 'Sin Asignar',
  DESNUTRIDO = 'Desnutrido',
  DELGADO = 'Delgado',
  IDEAL = 'Ideal',
  SOBREPESO = 'Sobrepeso',
  OBESO = 'Obeso',
}

export interface Resultado {
  imc: number;
  tipologia: Tipologia;
}

export interface ResultadoTrack {

  imcAvg: number;

  desnutrido: number;
  delgado: number;
  ideal: number;
  sobrepeso: number;
  obeso: number;

}
export class Imc {
  public imc: number;
  public tipologia: Tipologia;

  constructor(public peso: number, public altura: number) {
    this.imc = 0.0;
    this.tipologia = Tipologia.UNNASIGNED;
  }

  // Calcula el valor del imc
  private obtenerIMC() {
    this.imc = this.peso / (this.altura * this.altura);
  }

  // Obtiene el texto correspodiente al valor del imc
  obtenerTipologia(): void {
    let result: Tipologia = Tipologia.UNNASIGNED;

    result = greater(31, this.imc) ? Tipologia.OBESO : result;
    result = between(25, 31, this.imc) ? Tipologia.SOBREPESO : result;
    result = between(18, 25, this.imc) ? Tipologia.IDEAL : result;
    result = between(16, 18, this.imc) ? Tipologia.DELGADO : result;
    result = lesser(16, this.imc) ? Tipologia.DESNUTRIDO : result;

    this.tipologia = result;
  }

  calcularIMC(): Resultado {
    this.obtenerIMC();
    this.obtenerTipologia();

    return {
      imc: this.imc,
      tipologia: this.tipologia,
    };
  }
}
