import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceService } from './service.service';
describe('ServiceService', () => {
  let service: ServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
    });
    service = TestBed.inject(ServiceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});