import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentsComponent } from './dashboard-components.component';

describe('DashboardComponentsComponent', () => {
  let component: DashboardComponentsComponent;
  let fixture: ComponentFixture<DashboardComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentsComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
