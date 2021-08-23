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
export class HomeComponent implements OnInit {

  faMusic = faMusic;
  faCompactDisc  = faCompactDisc;
  faMicrophone = faMicrophone;
  faUser = faUser;

  albums: any[] = [];

  constructor( private _http: HttpClient, private _spotify: SpotifyService ) {

    this._spotify.getNewReleases().subscribe((data: any) => {

      console.log(data.albums.items);
      this.albums = data.albums.items

    })

  }

  ngOnInit(): void {
  }

}
