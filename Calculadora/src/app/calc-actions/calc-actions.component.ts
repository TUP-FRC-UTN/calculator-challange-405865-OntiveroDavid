import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  templateUrl: './calc-actions.component.html',
  styleUrls: ['./calc-actions.component.css']
})
export class CalcActionsComponent {
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  
  @Output() resultado = new EventEmitter<number>();

  calcular(operacion: string) {
    let resultado: number;

    switch (operacion) {
      case 'suma':
        resultado = this.valor1 + this.valor2;
        break;
      case 'resta':
        resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacion':
        resultado = this.valor1 * this.valor2;
        break;
      case 'division':
        resultado = this.valor1 / this.valor2;
        break;
      case 'potencia':
        resultado = Math.pow(this.valor1, this.valor2);
        break;
      case 'raiz':
        resultado = Math.pow(this.valor1, 1 / this.valor2);
        break;
      default:
        resultado = 0;
        console.error('Operación no soportada');
    }

    this.resultado.emit(resultado);
  }

  reset() {
    this.resultado.emit(0);
  }
}