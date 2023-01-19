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
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
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

  it('should check email validation while signup', () => {
    let email = component.signInForm.controls['email'];
    email.setValue('test@gmail.com');
    expect(email.valid).toBeTruthy();
    expect(email.value).toEqual('test@gmail.com');
    expect(email.invalid).toBeFalsy();
    expect(email.errors).toBeNull();

  })

  it('should check password validation while signup ', () => {
    let password = component.signInForm.controls['password'];
    password.setValue('12345678');
    expect(password.valid).toBeTruthy();
    expect(password.value).toEqual('12345678');
    expect(password.invalid).toBeFalsy();
  })

});
