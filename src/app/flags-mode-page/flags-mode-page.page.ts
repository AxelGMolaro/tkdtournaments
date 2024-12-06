import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-flags-mode-page',
  templateUrl: './flags-mode-page.page.html',
  styleUrls: ['./flags-mode-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FlagsModePagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
