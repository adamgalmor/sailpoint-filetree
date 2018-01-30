import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class GlobalService {
  public selectedFolderStream = new Subject();

  constructor() { }

}