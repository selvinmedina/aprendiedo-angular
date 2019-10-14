import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = 'Componente de videojuegos';
        this.listado = 'Listado de los juegos mas populares';
        //console.log('Se ha cargado el componente: videojuego.component.ts');
    }

    ngOnInit() {
        //console.log('OnInit ejcutado');
    }

    ngDoCheck(): void {
        //console.log('DoCheck Cargado');
    }

    ngOnDestroy(){
        //console.log('OnDestroy ejecutado');
    }
    cambiarTitulo(titulo: string) {
        this.titulo = titulo;
    }

}
