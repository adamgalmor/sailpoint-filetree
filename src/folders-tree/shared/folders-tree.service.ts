import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Folder } from '../../shared/models/folder';
// import { Promise } from 'q';
// import {*} from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable()
export class FoldersTreeService {
  constructor(private http: Http) { }

  // loadAll(folder_id): Observable<Folder> {
  //   if (!folder_id)
  //     folder_id = "server";  

  //   this.http.get(`/data/${folder_id}/.json`).subscribe(data: Observable<Folder> => {
  //     // this.dataStore.todos = data;
  //     // this._todos.next(Object.assign({}, this.dataStore).todos);
  //     return data;
  //   }, error => console.log('Could not load todos.'));
  // }

  // public getFolders(folder_id){
  //   if (!folder_id)
  //     folder_id = "server";  

  //   return this.http.get(`/data/${folder_id}/.json`).toPromise();
  // }

  public getFolders(folder_id=null){
    if (!folder_id)
      folder_id = "server";  
    let url = `/assets/data/${folder_id}.json`;
    return this.http.get(url)
    // .map((respone:Response) =>{
    //   debugger;
    //   respone.json();
    // });
  }

  // public getAdvantageData(){
  //   let apiUrl = './assets/data/api/advantage.json';
  //  return this.http.get(apiUrl)
  //    .map( (response: Response) => {
  //      const data = response.json();
  //      return data; } );


}
