import { TestBed, inject } from '@angular/core/testing';

import { CollaborationService } from './collaboration.service';

describe('CollaborationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaborationService]
    });
  });

  it('should be created', inject([CollaborationService], (service: CollaborationService) => {
    expect(service).toBeTruthy();
  }));
});
