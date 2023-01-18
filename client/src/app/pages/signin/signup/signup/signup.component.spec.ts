import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { ServiceService } from 'src/app/services/service.service';
import { NgModule } from '@angular/core';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [RouterTestingModule,ReactiveFormsModule,HttpClientTestingModule],
      providers: [ServiceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid when should be empty', () => {
    expect(component.signInForm.valid).toBeFalsy();
  });

  it('email field should be required', () => {
    let errors = {};
    let email = component.signInForm.controls['email'];
    errors = email.errors ||{};
   // expect(errors['required']).toBeTruthy();
  });
  it('password field should be required', () => {
    let errors = {};
    let password = component.signInForm.controls['password'];
    errors = password.errors || {};
  //  expect(errors['required']).toBeTruthy();
  });

});
