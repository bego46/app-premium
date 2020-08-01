import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public variable = {
    reserva : "",
    nombre : "",
    apellidos : "",
    ubicacion : "",
    direccion : "",
    telefono : ""
  };
  constructor(public navCrl: NavController) {

  }

  saveForm(){
    console.log(this.variable);
  }
}
