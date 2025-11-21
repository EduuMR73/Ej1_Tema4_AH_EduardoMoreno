import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EarthquakeResponse } from '../models/earthquake.model';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {
  // API pública de terremotos (USGS)
  private readonly apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

  constructor(private http: HttpClient) { }

  getLatestEarthquake(): Observable<EarthquakeResponse> {
    return this.http.get<EarthquakeResponse>(this.apiUrl);
  }
}
