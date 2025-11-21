import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { SpringService } from '../services/spring.service';
import { SpringDataResponse } from '../models/spring-data.model';

@Component({
  selector: 'app-api-spring',
  templateUrl: './api-spring.page.html',
  styleUrls: ['./api-spring.page.scss'],
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
    IonSpinner,
    IonButtons,
    IonBackButton
  ]
})
export class ApiSpringPage {
  data: SpringDataResponse[] = [];
  loading = false;
  error = '';

  constructor(private springService: SpringService) {}

  loadData() {
    this.loading = true;
    this.error = '';
    this.data = [];

    this.springService.getData().subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar datos: ' + err.message;
        this.loading = false;
      }
    });
  }
}
