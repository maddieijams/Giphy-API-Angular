import { Component } from '@angular/core';
import { GiphyApiService } from './giphy-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giphyApp';

  gifs: Array<any>;

  constructor(private giphyApi: GiphyApiService){
    console.log('construction began')
  }

searchGIF(search){
  this.giphyApi.gifSearch(search).subscribe(data => {
    this.gifs = data['data']; 
    console.log(this.gifs)})
}
}
