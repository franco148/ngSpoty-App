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

  constructor(public _spotify: SpotifyService) {
    this._spotify.getArtists().subscribe(response => {
      console.log(response);
    });
  }

}
