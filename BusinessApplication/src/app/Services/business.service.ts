import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:3000";

  public addBusiness(busData:any){
    return this.http.post(this.baseUrl+"/Business",busData);
  }

  public getBusiness(){
    return this.http.get(this.baseUrl+"/Business");
  }

  public deleteBusiness(id:any){
    return this.http.delete(this.baseUrl+`/Business/${id}`);
  }

  public getCurrentBusiness(id:any){
    return this.http.get(this.baseUrl+`/Business/${id}`);
  }
}
