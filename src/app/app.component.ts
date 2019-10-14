import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aprendiendo-Angular';
  public mostrar_videojuegos = true;

  mostrarocultarVideojuegos(valor:boolean) {
    this.mostrar_videojuegos = valor;
  }
}
