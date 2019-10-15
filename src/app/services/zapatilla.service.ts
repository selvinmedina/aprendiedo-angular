import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 40, 'marca 1', 'blanco', true),
            new Zapatilla('Nike', 60, 'marca 2', 'negro', false),
            new Zapatilla('adidas', 440, 'marca 3', 'rojo', true),
            new Zapatilla('nombre 4', 504, 'marca 4', 'blanco 2', true),
            new Zapatilla('nombre 5', 505, 'marca 5', 'blanco 3', true)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}