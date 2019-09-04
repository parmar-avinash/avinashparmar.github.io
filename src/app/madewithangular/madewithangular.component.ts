import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
 
@Component({
  selector: 'app-madewithangular',
  templateUrl: './madewithangular.component.html',
  styleUrls: ['./madewithangular.component.css']
})
export class MadewithangularComponent implements OnInit {
  clickCounter:number = 0;
  apiResponse : object;
  newResponse : object;
  constructor(private _http: HttpService) { }
 
  ngOnInit() {
    this._http.getData().subscribe(data => {
      this.apiResponse = data;
    });
 
    this._http.getData2().subscribe(data => {
      this.newResponse = data;
    });
 
   /*
    $('.btn-primary').click(function(){
      alert('Btn Clicked');
    });
   */
  
 
  }
 
  counterFunction(){
    this.clickCounter += 1;
 
  }
}
