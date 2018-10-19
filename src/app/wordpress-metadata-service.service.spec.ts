import { TestBed } from '@angular/core/testing';

import { WordpressMetadataServiceService } from './wordpress-metadata-service.service';

describe('WordpressMetadataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordpressMetadataServiceService = TestBed.get(WordpressMetadataServiceService);
    expect(service).toBeTruthy();
  });
});
