import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  ngOnInit() {
    this.carouselStateService.setActive(true);
    this.accountMenuStateService.setActive(false);
  }

  loginForm: FormGroup;

  constructor(
    public carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService,
    private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Implement your user login logic here
    }
  }
}
