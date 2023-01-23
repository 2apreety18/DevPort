import { ServiceService } from './../../services/service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WebViewComponent } from './web-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('WebViewComponent', () => {
  let component: WebViewComponent;
  let fixture: ComponentFixture<WebViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebViewComponent],
      imports:[HttpClientTestingModule, RouterTestingModule],
      schemas: [ NO_ERRORS_SCHEMA],
      providers: [ServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not create', () => {
    expect(component).toBeTruthy();
  });
});
