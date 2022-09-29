import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  count = 6 ;
  N1=5;
  N2=6;
  SUM=0;
  listofnum=[12,2561,351,514,6542,1521];
  listofstr=["hello","Anurag","Praveen"];
  increment=()=>{
    this.count++;
  }
  decrement=()=>{
    this.count--;
  }
  ADD=()=>{
   this.SUM =this.N1+this.N2;
   
  }
}
