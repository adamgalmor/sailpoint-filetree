import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { FoldersTreeService } from '../folders-tree/shared/folders-tree.service';
import { FoldersTreeComponent } from '../folders-tree/folders-tree.component';
import { HttpModule } from '@angular/http';
import { TreeModule } from 'angular-tree-component';
import { FilesGridComponent } from '../files-grid/files-grid.component';
import { GlobalService } from '../shared/services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    FoldersTreeComponent,
    FilesGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TreeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [FoldersTreeService, GlobalService],
  bootstrap: [AppComponent, FoldersTreeComponent, FilesGridComponent]
})
export class AppModule { }
