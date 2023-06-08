// register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService
    ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Implement your user registration logic here
    }
  }

  ngOnInit() {
    this.carouselStateService.setActive(true);
    this.accountMenuStateService.setActive(false);
  }
}
