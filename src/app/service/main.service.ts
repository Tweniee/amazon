import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  myProducts : any;
  cartOrder : any;
  isPresent = false;
  constructor(private http : HttpClient) { 
    //calling the function and checking the value
    this.getJSON().subscribe(data => {
      console.log(data);
  }); 
  }
  public getJSON(): Observable<any> {
    //getting data from the JSON file
    return this.http.get("../../assets/data/product.json");
}
}
