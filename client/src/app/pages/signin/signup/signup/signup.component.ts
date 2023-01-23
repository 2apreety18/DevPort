import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  isSubmitted: Boolean = false;
  SignUp:string ='Sign Up'

  constructor(
    private formBuilder: FormBuilder,
    private profileData: ServiceService,
    private router: ActivatedRoute,
    private routerJump: Router
  ) { }

  ngOnInit(): void { }

  handleSubmit() {
    let signInFormValue: any = this.signInForm.value;
    this.profileData.postRegData(signInFormValue).subscribe(
      (res: any) => {
        console.log(res);
       this.isSubmitted=true;
        localStorage.setItem("userId", res.userId)
        this.routerJump.navigate([`/dashboard`]);
      });
  }
}
