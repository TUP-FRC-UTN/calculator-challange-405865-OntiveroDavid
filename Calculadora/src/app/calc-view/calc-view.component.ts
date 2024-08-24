import { Component } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrls: ['./calc-view.component.css']
})
export class CalcViewComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number | null = null;

  actualizarValor1(event: any) {
    this.valor1 = + event.target.value;
  }
  
  actualizarValor2(event: any) {
    this.valor2 = + event.target.value;
  }

  recibirResultado(resultado: number) {
    this.resultado = resultado;
  }
}