import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
  //Here can be difined provides, like
  //providers: [SpotifyService]
  //But the previous sintax means that the service can be used only in
  //the scope of the component (Different instances if we have dfined in other components)
})
export class SearchComponent {

  searchTerm: string = '';

  constructor(public _spotify: SpotifyService) {

  }

  searchArtist() {

    if(this.searchTerm.length == 0) {
      return;
    }

    // This kind of implementation helps when for example
    // loading = true;
    // this._spotify.getArtists(this.searchTerm).subscribe(response => {
    //   console.log(response);
    //   // loading = false;
    // });
    this._spotify.getArtists(this.searchTerm).subscribe();
  }

}
