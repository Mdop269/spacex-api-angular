import { Component, Inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player'
import { ApiDataService } from '../../services/api-data.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-youtube-launch',
  imports: [
    YouTubePlayerModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './youtube-launch.component.html',
  styleUrl: './youtube-launch.component.css'
})
export class YoutubeLaunchComponent {
  youtubeData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  
  playerConfig = {
    controls: 0,
    mute: 1,
    autoplay: 1
  };
  
  ngOnInit(){
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(scriptTag);
  }
}
