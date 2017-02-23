import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apellido="hola";
  title:string = "Hola amigos";
  constructor() {
    this.apellido = this.saludar();
    this.saludar2("Ram");
  }
  saludar(): string {
    console.log("Hola");
    return `Hi everyone, mi nombre es: ${this.apellido}`;
  }
  saludar2(apellido:string, nombre?:string){
    console.log(`${apellido} ${nombre}`);
  }

}
