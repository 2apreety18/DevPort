import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder;
  let buttonElement: HTMLElement;
  let location: Location;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule],
      providers:[ServiceService, FormBuilder, Router]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    router = TestBed.get(Router);
    router.initialNavigation();


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
    expect(component.loginForm.invalid).toBeFalsy();
  });

  it('should set the email control to "testing@gmail.com"', () => {
    component.loginForm.controls['email'].setValue('testing@gmail.com');
    expect(component.loginForm.value.email).toEqual('testing@gmail.com');
  });

  it('should set the password control to "123456"', () => {
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.value.password).toEqual('123456');
  });

  it('should call handleSubmit when button is clicked', () => {
    spyOn(component, 'handleSubmit');
    buttonElement.click();
    expect(component.handleSubmit).toHaveBeenCalled();
  });



  // it('check the form controls inside a form group', fakeAsync(()=>{
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     const email: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
  //     const password: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');

  //     email.value = 'testing@gmail.com',
  //     password.value = '123456',

  //     email.dispatchEvent(new Event('input'));
  //     password.dispatchEvent(new Event('input'));

  //     fixture.detectChanges();
  //     fixture.whenStable().then(() => {
  //       expect(component.loginForm.value).toEqual({
  //         email: 'testing@gmail.com',
  //         password: '123456'
  //       })
  //     })
  //   })
  // }));

 
  
})
  

