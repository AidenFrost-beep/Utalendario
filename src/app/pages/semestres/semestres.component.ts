import { Component } from '@angular/core';

@Component({
  selector: 'app-semestres',
  templateUrl: './semestres.component.html'
})
export class SemestresComponent {
  mostrar: Boolean = false;
  mensajeContenido: String = '';
  mensajeContenido2: String = '';

  mostrarOcultar() {
    if (this.mostrar) {
      this.mostrar = false;

    }
    else {
      this.mostrar = true;
      this.mensajeContenido = 'Grupo: A';
      this.mensajeContenido2 = 'Sala: Laboratorio Socompa';
    }
  }
}
