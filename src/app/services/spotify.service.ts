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
      'Authorization':'Bearer BQCo0YyJDuNCvbnklms_Z3_Af3A3x7j_faFTb4EDy3iCx7V_36osVIz04pIo8uNaoWUYJ6CmqcwUSSd2xzg'
    })

    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

  getSearchArtist(query: string ) {
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCo0YyJDuNCvbnklms_Z3_Af3A3x7j_faFTb4EDy3iCx7V_36osVIz04pIo8uNaoWUYJ6CmqcwUSSd2xzg'
    })

    return this._http.get(`https://api.spotify.com/v1/search?q=${ query }&type=artist&limit=20`, { headers });
  }

}
