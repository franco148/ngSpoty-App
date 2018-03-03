import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log('Spotify service is ready!!!');
  }

  getArtists() {
    let url = "https://api.spotify.com/v1/search?query=Rammstein&type=artist&offset=0&limit=20";

    this.http.get(url).subscribe(data => {
      console.log(data);
    });
  }
}
