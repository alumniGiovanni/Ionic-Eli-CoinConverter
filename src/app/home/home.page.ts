import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {
  //  this.createData();
    this.readData();
  //  this.updateData();
  //  this.deleteData();
  }

  readData(){
    this.data.readData().subscribe(data =>{
      console.log(data)
    });
  }

}
