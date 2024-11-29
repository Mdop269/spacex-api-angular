import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaunchesTableComponent } from "./components/launches-table/launches-table.component";
import { HttpClientModule } from '@angular/common/http';
import { RocketsComponent } from "./components/rockets/rockets.component";
import { RouterModule } from '@angular/router';
import { YoutubeLaunchComponent } from "./components/youtube-launch/youtube-launch.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spacex-api-angular';
}
