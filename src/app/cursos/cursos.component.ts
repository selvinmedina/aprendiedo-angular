import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre:string;
  public followers:number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre;
      this.followers = +params['followers'];
      //this.nombre = params['nombre'];
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
      console.log(this.nombre);
      console.log(typeof +params.followers);
    });
  }

  redirigir(){
    this._router.navigate(['/videojuego']);
  }
}
