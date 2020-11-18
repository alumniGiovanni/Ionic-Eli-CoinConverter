import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
private api: string = "https://api.hgbrasil.com/finance?format=json-cors&key=4177407c";

  constructor(private http: HttpClient) { }
  

  createData(){

  }

  readData(){
    return this.http.get(this.api);
  }
  updateData(){

  }
  deleteData(){

  }

}
