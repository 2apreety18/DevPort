import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { ServiceService } from 'src/app/services/service.service';
import { NgModule, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
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

  it('should check invalid when inputs are empty - Reactive form', () => {
    expect(component.signInForm.invalid).toBeTruthy();
  })

  it('should disable attribute on submit button when signup form is invalid', () => {
    component.signInForm.get('email')?.setValue(null);
    const signupBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(signupBtn.disabled).toBeTrue();
    expect(signupBtn.textContent).toContain('SignUp');
  })

  it('Should call handleSubmit when clicked on submit button', () => {
    spyOn(component, 'handleSubmit');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(component.handleSubmit).toHaveBeenCalled();
  })

  it('Should check form control inside a form group', fakeAsync(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const email: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      const password: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');

      email.value = 'shuhat@gmail.com';
      password.value = '123456';

      email.dispatchEvent(new Event('input'));
      password.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.signInForm.value).toEqual({
          email: 'shuhat@gmail.com',
          password: '123456'
        })
      })
    })
  }));

})