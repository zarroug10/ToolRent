import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    imports: [
      ReactiveFormsModule,
      CommonModule,
      FormsModule
    ],
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup = new FormGroup({});
    public email:string = '';
    public password:string = '';


    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [this.email, [Validators.required, Validators.email]],
            password: [this.password, Validators.required]
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Form Submitted', this.loginForm.value);
        } else {
            console.log('Form is invalid');
        }
    }
}