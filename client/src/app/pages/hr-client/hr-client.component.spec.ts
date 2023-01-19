import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrClientComponentsComponent } from 'src/app/components/hr-client-components/hr-client-components.component';

import { HrClientComponent } from './hr-client.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HrClientComponent', () => {
  let component: HrClientComponent;
  let fixture: ComponentFixture<HrClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrClientComponent, HrClientComponentsComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
