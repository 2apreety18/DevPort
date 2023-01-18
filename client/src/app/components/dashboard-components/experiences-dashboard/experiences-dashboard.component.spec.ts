import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesDashboardComponent } from './experiences-dashboard.component';
import { FormBuilder } from '@angular/forms';


describe('ExperiencesDashboardComponent', () => {
  let component: ExperiencesDashboardComponent;
  let fixture: ComponentFixture<ExperiencesDashboardComponent>;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('ValueService',['getValue']);

    await TestBed.configureTestingModule({
      declarations: [ ExperiencesDashboardComponent],
      imports : [],
      providers : [FormBuilder] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
