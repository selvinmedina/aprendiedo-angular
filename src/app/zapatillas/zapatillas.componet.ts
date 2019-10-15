import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public miMarca: string;

    constructor() {
        this.color = 'blue';
        this.marcas = new Array();
        this.miMarca = 'Fila';
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 40, 'marca 1', 'blanco', true),
            new Zapatilla('Nike', 60, 'marca 2', 'negro', false),
            new Zapatilla('adidas', 440, 'marca 3', 'rojo', true),
            new Zapatilla('nombre 4', 504, 'marca 4', 'blanco 2', true),
            new Zapatilla('nombre 5', 505, 'marca 5', 'blanco 3', true)
        ];
    }

    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }

        });
        console.log(this.marcas);
    }

    getMarca() {
        alert(this.miMarca);
    }

    addMarca() {
        this.marcas.push(this.miMarca);
    }

    borrarMarca(indice) {
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur(){
        console.log('Has salido del input');
    }

    mostrarPalabra(){
        alert(this.miMarca);
    }
}