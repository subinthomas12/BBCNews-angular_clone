import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  // newsapiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cbb704aaae1a4a85a9d6921d15507326"


  // technewsapiurl
  techApiUrl ="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=cbb704aaae1a4a85a9d6921d15507326"


    // businessnewsapiurl
    businessApiUrl ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cbb704aaae1a4a85a9d6921d15507326"


  // topheading
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  
  // technews
  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  // businessnews
  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl);
  }
}
