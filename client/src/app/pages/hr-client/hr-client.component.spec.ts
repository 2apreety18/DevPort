import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrClientComponent } from './hr-client.component';

describe('HrClientComponent', () => {
  let component: HrClientComponent;
  let fixture: ComponentFixture<HrClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrClientComponent ],
      imports:[HttpClientModule]
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
