import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  constructor(private logger: LoggerService){}

  signupForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  nameFieldErr(): string {
    const control = this.signupForm.get('name');
    if (!control ||
       !control.errors||
       !control.dirty||
       !control.touched
      ) {
      return'';
    }
     

    if(control.getError('required')) {
      return 'this field is required'
    }


    return '';
  }

  emailFieldErr(): string {
    const control = this.signupForm.get('email');
    if (!control ||
       !control.errors||
       !control.dirty||
       !control.touched
      ) {
      return'';
    }
     

    if(control.getError('required')) {
      return 'this field is required'
    }

    if(control.getError('email')) {
      return 'Email is not vaild'
    }



    return '';
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
  }

}
