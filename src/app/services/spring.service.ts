import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpringDataResponse } from '../models/spring-data.model';

@Injectable({
  providedIn: 'root'
})
export class SpringService {
  //  Mi APP en Render
  private readonly apiUrl = 'https://arbitros-api.onrender.com/api/arbitros';

  constructor(private http: HttpClient) { }

  getData(): Observable<SpringDataResponse[]> {
    return this.http.get<SpringDataResponse[]>(this.apiUrl);
  }
}
