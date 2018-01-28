import { TestBed, inject } from '@angular/core/testing';

import { FoldersTreeService } from './folders-tree.service';

describe('FoldersTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoldersTreeService]
    });
  });

  it('should be created', inject([FoldersTreeService], (service: FoldersTreeService) => {
    expect(service).toBeTruthy();
  }));
});
