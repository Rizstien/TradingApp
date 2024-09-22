import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  constructor(private http: HttpClient) { }

  fetchData(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map((response: any) => response.body)
    );
}

}
