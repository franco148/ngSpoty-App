import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public _spotifyService: SpotifyService) {
  }

  ngOnInit() {

    this.activatedRoute.params
        .map(params => params['id'])
        .subscribe(id => {
          //console.log(id);

          //Getting the artist
          this._spotifyService.getArtist(id)
                              .subscribe(artist => {
                                console.log('artista..............')
                                console.log(artist);
                                this.artist = artist;
                              });


          //Getting top tracks
          this._spotifyService.getTopTracks(id)
                              .subscribe(tracks => {
                                console.log('tracks..............')
                                console.log(tracks);
                                this.topTracks = tracks;
                              });
        });
  }

}
