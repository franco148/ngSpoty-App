import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];

  urlSpotity: string = 'https://api.spotify.com/v1/';
  tokenSpotify: string = "BQDR-SEZ_Ajgq1j3H58gHnS0aBATUuJUTjk5UcPcJ73nYazaQl1dgRvYICjt-Uf1sDDr61y6TRA6sPmuSkw";



  constructor(public http: HttpClient) {
    //console.log('Spotify service is ready!!!');
  }

  getArtists(searchTerm: string) {
    let url = `${ this.urlSpotity }search?query=${ searchTerm }&type=artist&offset=0&limit=20`
    let headers = this.getHeaders();

    // The following in ES6 can be updated like following
    // this.http.get(url, {headers: headers}).subscribe(data => {
    // this.http.get(url, {headers: this.getHeaders() }).subscribe(data => {

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

  getArtist(id: string) {
    let url = `${ this.urlSpotity }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getTopTracks(id: string) {
    //https://api.spotify.com/v1/artists/7okwEbXzyT2VffBmyQBWLz/top-tracks?country=BO
    let url = `${ this.urlSpotity }artists/${ id }/top-tracks?country=BO`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
                    .map((tracksResponse: any) => tracksResponse.tracks);
  }

  private getHeaders() : HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': `Bearer ${ this.tokenSpotify }`
    });

    return headers;
  }
}
