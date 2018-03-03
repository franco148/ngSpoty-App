import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Spotify service is ready!!!');
  }

  getArtists(searchTerm: string) {
    let url = `https://api.spotify.com/v1/search?query=${ searchTerm }&type=artist&offset=0&limit=20`
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQB17SC70cIaWA_zkfq4TOfVoP8cB84INUFFlstWnY6_Eyrwkuzkkz6mE5PYwKanbv_Hf4YSXkwVtdKa2o0'
    });

    // The following in ES6 can be updated like following
    // this.http.get(url, {headers: headers}).subscribe(data => {

    // It is not good idea to have observables in this context (for this exercise)
    // because we may need to perform some operations like wait popups or
    // something like that. For that reason, we are going to move this
    // observable to the component.
    // this.http.get(url, { headers }).subscribe(data => {
    //   console.log(data);
    // });

    // .map is going to help us extracting the required data for our component.
    return this.http.get(url, { headers })
                    .map( (data : any) => {
                      this.artists = data.artists.items;
                      return this.artists;
                    });
  }
}
