import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentsComponent } from './dashboard-components.component';
import { SidenavComponent } from './sidenav/sidenav.component';

describe('DashboardComponentsComponent', () => {
  let component: DashboardComponentsComponent;
  let fixture: ComponentFixture<DashboardComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentsComponent,SidenavComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule, FormsModule]

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
