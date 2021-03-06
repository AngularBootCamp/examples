import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { jsonRequestHeaders } from './httpUtils';

@Injectable({
  providedIn: 'root'
})
export class StarshipApi {
  constructor(private http: HttpClient) {}

  loadStarships(): Promise<any> {
    return firstValueFrom(
      this.http.get<any>('https://swapi.co/api/starships/', {
        headers: jsonRequestHeaders
      })
    ).then(shipList => {
      // Promise-based APIs still work fine:
      console.log('Ship list retrieved, GETting film data', shipList);
      return Promise.all(
        shipList.results.map((ship: any) => {
          console.log('GETting film data for ' + ship.name);
          return firstValueFrom(
            this.http.get<any>(ship.films[0], {
              headers: jsonRequestHeaders
            })
          ).then(film => {
            // console.log(film);
            ship.filmName = film.title;
            return ship;
          });
        })
      );
    });
  }
}
