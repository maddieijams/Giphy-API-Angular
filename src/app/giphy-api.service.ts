import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {
  
  constructor(private http:HttpClient) { }
  
    api_key = 'GEyrcX4wjmKjt5PerxzCJEeo6DFtEpmT'
    base_url = 'http://api.giphy.com/v1/gifs/search';

  gifSearch(search){
    return this.http.get(`${this.base_url}?q=${search}&api_key=${this.api_key}&limit=49`);
  }
}
