import { Component, OnInit } from '@angular/core';
import { FoldersTreeService } from './shared/folders-tree.service'
import { Observable } from 'rxjs/Observable';
import { Folder } from '../shared/models';
import { ITreeOptions, TreeNode} from 'angular-tree-component';
import { GlobalService } from '../shared/services'
import { Subscription } from 'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-folders-tree',
  templateUrl: './folders-tree.component.html',
  styleUrls: ['./folders-tree.component.scss']
})
export class FoldersTreeComponent implements OnInit, OnDestroy {
  public getFoldersSubscription: Subscription;
  public folders: Folder[];
  public options: ITreeOptions = {
    getChildren: this.getChildren.bind(this)
  };
  
  constructor(private foldersTreeService: FoldersTreeService, private globalService:GlobalService) { }

  ngOnInit() {
    this.getFoldersSubscription = this.foldersTreeService.getFolders().subscribe(res =>{
      this.folders = res;
      console.log(this.folders);
    })
  }

  ngOnDestroy(){
    this.getFoldersSubscription.unsubscribe();
  }

  getChildren(node: any) {
    return this.foldersTreeService.getFolders(node.id).toPromise();    
  }
  
  onActivate = ($event) => {
    this.globalService.selectedFolderStream.next($event.node.data.files);
    console.log($event);
  }
    
}

