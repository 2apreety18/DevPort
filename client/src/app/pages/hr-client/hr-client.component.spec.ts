import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrClientComponentsComponent } from 'src/app/components/hr-client-components/hr-client-components.component';
import { ServiceService } from 'src/app/services/service.service';

import { HrClientComponent } from './hr-client.component';

describe('HrClientComponent', () => {
  let component: HrClientComponent;
  let fixture: ComponentFixture<HrClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrClientComponent ],
      imports:[HttpClientTestingModule]
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
