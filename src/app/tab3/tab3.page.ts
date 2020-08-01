import { Component, NgModule } from '@angular/core';
import { FormBuilder, Validators, FormsModule} from '@angular/forms';
import { NavController } from '@ionic/angular';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    FormBuilder,
    Validators,
    FormsModule,
    NavController
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

  public formulario  = {
    reserva : "",
    tarjeta : "",
    fecha : "",
    cvc : ""
  }

  constructor(public navCrl: NavController) {
    
  }


// Funcion para guardar formulario
  saveForm(){
    console.log(this.formulario);
  }

}

