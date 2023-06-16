import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService,
    private registerService: RegisterService,
    ) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.registerForm.valid)
    console.log(this.registerForm.errors)
    console.log('firstName errors', this.registerForm.get('firstName')?.errors);
    console.log('lastName errors', this.registerForm.get('lastName')?.errors);
    console.log('email errors', this.registerForm.get('email')?.errors);
    console.log('password errors', this.registerForm.get('password')?.errors);
    console.log('confirmPassword errors', this.registerForm.get('confirmPassword')?.errors);

    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value)
      .subscribe(
        response => console.log('User registered!', response),
        error => console.error('Error registering user', error)
      );
    }
  }

  ngOnInit() {
    this.carouselStateService.setActive(true);
    this.accountMenuStateService.setActive(false);
  }
}