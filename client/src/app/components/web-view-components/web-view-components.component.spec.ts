import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicInfoWebComponent } from './basic-info-web/basic-info-web.component';
import { ContactFormWebComponent } from './contact-form-web/contact-form-web.component';
import { EducationsWebComponent } from './educations-web/educations-web.component';
import { ExperiencesWebComponent } from './experiences-web/experiences-web.component';
import { ProjectsWebComponent } from './projects-web/projects-web.component';

import { WebViewComponentsComponent } from './web-view-components.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { profileData } from 'src/app/mocks/profile';

describe('WebViewComponentsComponent', () => {
  TestBed.configureTestingModule({
    declarations: [WebViewComponentsComponent],
    schemas: [NO_ERRORS_SCHEMA]
  })
    .compileComponents();
  let component: WebViewComponentsComponent;
  let fixture: ComponentFixture<WebViewComponentsComponent>;



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
