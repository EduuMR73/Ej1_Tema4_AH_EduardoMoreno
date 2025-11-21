import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner } from '@ionic/angular/standalone';
import { EarthquakeService } from '../services/earthquake.service';
import { Feature } from '../models/earthquake.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner
  ],
})
export class HomePage {
  latestEarthquake: Feature | null = null;
  loading = false;
  error = '';

  constructor(private earthquakeService: EarthquakeService) {}

  loadEarthquake() {
    this.loading = true;
    this.error = '';
    this.latestEarthquake = null;

    this.earthquakeService.getLatestEarthquake().subscribe({
      next: (data) => {
        if (data.features && data.features.length > 0) {
          this.latestEarthquake = data.features[0];
        } else {
          this.error = 'No se encontraron terremotos recientes';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar datos: ' + err.message;
        this.loading = false;
      }
    });
  }
}
