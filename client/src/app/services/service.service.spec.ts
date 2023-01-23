import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceService } from './service.service';
import { profileData } from '../mocks/profile'

describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;
  let Url = `http://localhost:3000/dashboard`;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
    });
    service = TestBed.inject(ServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  // it('should return "test data"', () => {
  //   expect(service.getData()).toEqual('test data');
  // });
  afterEach(() => {
    httpMock.verify();
  });

  // it('should return "mock data"', () => {
  //   expect(service.getAllProfileData()).toEqual(profileData);
  // });

  // it('should return data from the API', () => {
  //   const mockData = profileData[];

  //   service.getAllProfileData().subscribe(data => {
  //     expect(data).toEqual(mockData);
  //   });

  //   const req = httpMock.expectOne(`${Url}/`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockData);
  // });

});