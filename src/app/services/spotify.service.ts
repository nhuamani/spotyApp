import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  /* Importa los services automaticamente implicitamente
  *  sin estos parametros toca importar manualmente en app.module.ts
  */
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Listo!!!')
  }

  // Unificar la Peticion HTTP
  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer BQCGOUMH4obIgUziaXkFovjEqLDrGaMFOHpo5ryxVoAN4CrhWpuyXcQ8vQK3D58KG8Fn7fMHoXnpEkAtnkM`
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
      //.pipe( map( (data: any) => data['albums'].items)); // Return ES6
      .pipe( map( (data: any) => {
        // console.log(data)

        return data['albums'].items;
      }))
  }


  getSearchArtist(q: string ) {

    return this.getQuery(`search?q=${ q }&type=artist&limit=20`)
      .pipe( map( (data: any) => data['artists'].items))

  }

}
