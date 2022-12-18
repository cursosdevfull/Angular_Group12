import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Router } from '@angular/router';

type VisibleInputPassword = 'password' | 'text';

@Component({
  selector: 'amb-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  styleFormField: MatFormFieldAppearance = 'outline';
  visibleInputPassword: VisibleInputPassword = 'password';

  domainsAllowed = ['company.com', 'lynk.com'];

  group: FormGroup;

  //patternPassword = '^(?=.*[a-z])(?=.{8,})';
  patternPassword = /^[a-zA-Z]\w{3,14}$/;
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private readonly router: Router) {
    this.group = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.patternEmail),
        //this.validateEmailDomain.bind(this),
        this.getValidateEmailDomain(this.domainsAllowed),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.patternPassword),
      ]),
      /* confirm: new FormControl(null, [
        Validators.required,
        this.validateConfirmPassword,
      ]), */
    });

    /*  this.group.get('email').valueChanges.subscribe((value) => {
      console.log(value);
    }); */
  }

  ngOnInit(): void {}

  passwordVisible() {
    this.visibleInputPassword =
      this.visibleInputPassword === 'password' ? 'text' : 'password';
  }

  login() {
    if (this.group.valid) {
      console.log('Form is valid');
      console.log(this.group.value);
      this.router.navigate(['/driver']); //   driver/list
    } else {
      console.log('Form is invalid');
    }

    //console.log(this.group);
  }

  validateEmailDomain(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const email = (control.value as string).toLowerCase();

    const isUsingDomainAllowed = this.domainsAllowed.some((domain) =>
      email.endsWith(domain)
    );
    return isUsingDomainAllowed ? null : { invalidEmailDomain: true };
  }

  getValidateEmailDomain(domainsAllowed: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const email = (control.value as string).toLowerCase();

      const isUsingDomainAllowed = domainsAllowed.some((domain) =>
        email.endsWith(domain)
      );

      return isUsingDomainAllowed ? null : { invalidEmailDomain: true };
    };
  }

  validateConfirmPassword(control: AbstractControl): ValidationErrors | null {
    const parent = control.parent;
    if (!parent) return null;

    const password = parent.get('password');
    const confirm = parent.get('confirm');

    if (!password || !confirm) return null;

    if (password.value !== confirm.value) {
      return { confirmNotMatch: true };
    }

    return null;
  }
}
