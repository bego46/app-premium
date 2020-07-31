import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  get name(){
    return this.registrationForm.get('name');
  }

  get email(){
    return this.registrationForm.get('email')
  }

  get phone(){
    return this.registrationForm.get('phone')
  }

  get street(){
    return this.registrationForm.get('address.street');
  }

  get city(){
    return this.registrationForm.get('address.city')
  }

  get state(){
    return this.registrationForm.get('address.state')
  }

  get zip(){
    return this.registrationForm.get('address.zip')
  }

  // public error = {
  //   name: [
  //     { type: 'required', message: 'Name i required' },
  //     { type: 'maxlength', message: 'Name Cant be longer than 100 characters'}
  //   ],
  //   email: [
  //     { type: 'required', message: 'Email is required' },
  //     { type: 'pattern', message: 'Please enter a valid email address' }
  //   ],
  //   phone: [
  //     { type: 'required', message: 'Phone number is required' },
  //     { type: 'pattern', message: 'Please enter a valid email address' }
  //   ],
  //   street: [
  //     { type: 'required', message: 'Street name is required' },
  //     {
  //       type: 'maxlength',
  //       message: 'Street name cant be longer than 100 characters'
  //     }
  //   ],
  //   city: [
  //     {type: 'required', message: 'City name is required' },
  //     {
  //       type: 'maxlength',
  //       message: 'City name cant be longer than 100 characters'
  //     }
  //   ],
  //   state: [
  //     {type: 'required', message: 'State is required' },
  //     {
  //       type: 'maxlength',
  //       message: 'State cant be longer than 100 characters'
  //     }
  //   ],
  //   zip: [
  //     { type: 'required', message: 'Zip code is required' },
  //     {
  //       type: 'pattern',
  //       message: 'Please enter a valid zip code'
  //     }
  //   ]
  // };

  registrationForm = this.formBuilder.group({
    name: [''], //, [Validators.required, Validators.maxLength(100)]
    email: [''
      // '', 
      // [
      //   Validators.required,
      //   Validators.pattern('^[a-zA-Z]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')
      // ]
    ],
    phone: [''
      // '',
      // [
      //   Validators.required,
      //   Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")
      // ]
    ],
    address: this.formBuilder.group({
      street: [''],//, [Validators.required, Validators.maxLength(100)]],
      city: [''],//, [Validators.required, Validators.maxLength(100)]],
    })

  });

  constructor(private formBuilder: FormBuilder) {}

  public submit() {
    console.log(this.registrationForm.value); 
  }
}
