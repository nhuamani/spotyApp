import { Component } from '@angular/core';
import { faCompactDisc, faMusic, faGuitar, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

// Services
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  faMusic = faMusic;
  faCompactDisc  = faCompactDisc;
  faGuitar = faGuitar;
  faUsers = faUsers;
  faStar = faStar;

  resArtists: any[] = [];

  constructor(private _spotify: SpotifyService) { }

  buscarArtista(q: string) {

    // console.log(q)

    this._spotify.getSearchArtist( q )
      .subscribe( (data: any) => this.resArtists = data )

  }

}
