import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Font Awesome Icons
import { faMusic, faCompactDisc, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons';

// Services
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faMusic = faMusic;
  faCompactDisc  = faCompactDisc;
  faMicrophone = faMicrophone;
  faUser = faUser;

  newAlbums: any[] = [];

  constructor( private _http: HttpClient, private _spotify: SpotifyService ) {

    this._spotify.getNewReleases()
      .subscribe( (data: any) => this.newAlbums = data )

  }

}
