import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {ClusterSetupMasterSettings} from "cluster";
import {MasterURLService} from "./services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Bienvenido a ingresar tiendas";
  error:string="No hay errores";

  nuevaTienda={};

  disabledButtons ={
    NuevatiendaFormSubmitButton:false
  }

  constructor(private _http: Http, private _masterURL:MasterURLService) {
  }

  ngOnInit() {

  }

  crearTienda(formulario:NgForm){
    this.disabledButtons.NuevatiendaFormSubmitButton=true;
    console.log(formulario);
    this._http.post(this._masterURL.url+"Tienda", {
      nombre:formulario.value.nombre
    })
      .subscribe(
        (res)=>{
          console.log('No hubo un error');
          console.log(res);
          this.nuevaTienda = {};
          this.disabledButtons.NuevatiendaFormSubmitButton=false;
        },
        (err)=>{
          console.log('Hubo un error',err);
          this.disabledButtons.NuevatiendaFormSubmitButton=false;
        },
        ()=>{
          console.log('Termino la funcion vamos  a las casas');
        }

      );
      // .post("http://localhost:1337/Tienda", formulario.valores)
      // .subscribe(
      //   res=>console.log('Respuesta: ',res),
      //   err=>console.log('Error: ',err),
      //   ()=>{
      //     console.log("Se completo la accion")
      //   }
      // );
  }

}
