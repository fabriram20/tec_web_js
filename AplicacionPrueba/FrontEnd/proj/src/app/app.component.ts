import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  apellido="";
  nombre:string="";
  title:string = "Hola amigos";
  colorH4 = "red";
  tamanoH4 = "25px";
  classes = "button";
  nuevaTienda:any={};

  constructor() {
    this.nombre="ram";
    this.apellido="fabro";
    console.log("inicio el contructor")
  }
  ngOnInit(){
    this.apellido="Cutimbo";
    this.nombre="Eloy";
    console.log("On Init")
  }
  nombreCompleto():string{
    return `${this.nombre} ${this.apellido}`
  }
  hizoClick(){
    console.log("Hizo Click");

  }
  hizoFocus(){
    console.log("Hizo Focus");
  }
  backgroudColor(){
    return "red";
  }
  crearTienda(formulario){
    console.log(formulario);
  }
}
