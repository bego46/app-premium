import { Component, NgModule } from '@angular/core';
import { FormBuilder, Validators, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    FormBuilder,
    Validators,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public formulario : any;
  public prueba : String;

  constructor() {
    
  }
// Funcion para guardar formulario
  saveForm(){
    this.formulario = {
      no_reserva : "",
      nombres : "",
      apellidos : "",
      pais_ciudad : "",
      direcion : "",
      telefono : ""
    }
    console.log(this.formulario);
  }

}
