import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

export interface Company {
  id?: string;
  name: string;
  phone: string;
  address: string;
}

const apiUrl = 'https://api.angularbootcamp.com';

function logWithTimestamp(messageList: any[]) {
  console.table(messageList);
  console.log('Messages retrieved at ' + new Date().toISOString());
}

@Injectable({
  providedIn: 'root'
})
export class CompanyLoader {
  constructor(private http: HttpClient) {}

  loadOneCompany() {
    return this.http.get<Company[]>(apiUrl + '/companies').pipe(
      tap(companies => logWithTimestamp(companies)),
      map(companies => companies[0])
    );
  }
}
