import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoldersTreeService } from '../folders-tree/shared/folders-tree.service';
import { FoldersTreeComponent } from '../folders-tree/folders-tree.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FoldersTreeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FoldersTreeService],
  bootstrap: [AppComponent, FoldersTreeComponent]
})
export class AppModule { }
