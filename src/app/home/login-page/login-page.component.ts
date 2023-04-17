import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  @ViewChild('emailFieldRef') emailField!: ElementRef;

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  mailFieldErr(): string {
    const control = this.loginForm.get('email');
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

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.emailField.nativeElement.focus();
  }
onSubmit() {
  if (this.loginForm.invalid) {
    return;
  }

  console.log(this.loginForm.value);
}

}
