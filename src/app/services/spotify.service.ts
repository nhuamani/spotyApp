import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  /* Importa los services automaticamente implicitamente
  *  sin estos parametros toca importar manualmente en app.module.ts
  */
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient ) {

    console.log('Spotify Listo!!!');

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBEuL5XxCqUSg7jyelV5Lw-jkJfJvF_b2UTwXpr00JhPyTwIVcs5wePGIP8o9ZSW2RHaeIxNcDZHOgrt1M'
    })

    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

}
