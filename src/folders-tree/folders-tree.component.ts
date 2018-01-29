import { Component, OnInit } from '@angular/core';
import { FoldersTreeService } from './shared/folders-tree.service'
import { Observable } from 'rxjs/Observable';
import { Folder } from '../shared/models/folder';
@Component({
  selector: 'app-folders-tree',
  templateUrl: './folders-tree.component.html',
  styleUrls: ['./folders-tree.component.scss']
})
export class FoldersTreeComponent implements OnInit {

  public folders: Folder[];

  constructor(private foldersTreeService: FoldersTreeService) { }

  ngOnInit() {
    this.foldersTreeService.getFolders().subscribe(res =>{
      this.folders = res;
      console.log(this.folders);
    })
  }

}
