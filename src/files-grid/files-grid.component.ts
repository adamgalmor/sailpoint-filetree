import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services'
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Rx';
import { File } from '../shared/models';


@Component({
  selector: 'app-files-grid',
  templateUrl: './files-grid.component.html',
  styleUrls: ['./files-grid.component.scss']
})

export class FilesGridComponent implements OnInit, OnDestroy {
  public files:File[] = [];
  public selectedFolderSubscription: Subscription;
  private showDeleted: boolean = false;

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.selectedFolderSubscription = this.globalService.selectedFolderStream.subscribe((res:File[]) => {
      this.files = res;
    });
  }

  ngOnDestroy(){
    this.selectedFolderSubscription.unsubscribe();
  }

  private showHideDeleted($event){
    this.showDeleted = $event.target.checked;
  }
}
