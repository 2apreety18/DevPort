import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule],
      providers:[ServiceService, FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    formBuilder = new FormBuilder();
    let formGroup;
    component.loginForm = formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should set the email control to "testing@gmail.com"', () => {
    component.loginForm.controls['email'].setValue('testing@gmail.com');
    expect(component.loginForm.value.email).toEqual('testing@gmail.com');
  });

  it('should set the password control to "123456"', () => {
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.value.password).toEqual('123456');
  });

});
