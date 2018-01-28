import { Component, OnInit } from '@angular/core';
import { FoldersTreeService } from './shared/folders-tree.service'
@Component({
  selector: 'app-folders-tree',
  templateUrl: './folders-tree.component.html',
  styleUrls: ['./folders-tree.component.scss']
})
export class FoldersTreeComponent implements OnInit {

  constructor(private foldersTreeService: FoldersTreeService) { }

  ngOnInit() {
    this.foldersTreeService.getFolders().subscribe(data => {
      console.log(data.json());
    });
  }

}
