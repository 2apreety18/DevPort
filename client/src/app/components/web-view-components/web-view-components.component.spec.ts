import { UserAccountsWebComponent } from './user-accounts-web/user-accounts-web.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicInfoWebComponent } from './basic-info-web/basic-info-web.component';
import { ContactFormWebComponent } from './contact-form-web/contact-form-web.component';
import { EducationsWebComponent } from './educations-web/educations-web.component';
import { ExperiencesWebComponent } from './experiences-web/experiences-web.component';
import { ProjectsWebComponent } from './projects-web/projects-web.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WebViewComponentsComponent } from './web-view-components.component';

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
