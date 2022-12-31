/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListServiceService } from './list-service.service';
import { WebService } from 'src/web.service';

describe('Service: ListService', () => {
  let service: WebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListServiceService]
    });
  });

  it('should exists', () => {
    expect(WebService).toBeDefined();
  });
});
