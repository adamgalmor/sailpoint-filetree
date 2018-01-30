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

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
  
  constructor(private foldersTreeService: FoldersTreeService) { }

  ngOnInit() {
    this.foldersTreeService.getFolders().subscribe(res =>{
      this.folders = res;
      console.log(this.folders);
    })
  }

}
