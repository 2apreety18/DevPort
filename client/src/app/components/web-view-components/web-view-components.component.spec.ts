import { ComponentFixture, TestBed } from '@angular/core/testing';


import { WebViewComponentsComponent } from './web-view-components.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { profileData } from 'src/app/mocks/profile';

describe('WebViewComponentsComponent', () => {
  let component: WebViewComponentsComponent;
  let fixture: ComponentFixture<WebViewComponentsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebViewComponentsComponent],
      imports:[HttpClientTestingModule, RouterTestingModule],
      schemas: [ NO_ERRORS_SCHEMA],
      providers: [ServiceService, profileData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebViewComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
