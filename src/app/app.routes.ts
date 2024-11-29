import { Routes } from '@angular/router';
import { LaunchesTableComponent } from './components/launches-table/launches-table.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { PayloadComponent } from './components/payload/payload.component';
import { YoutubeLaunchComponent } from './components/youtube-launch/youtube-launch.component';

export const routes: Routes = [
    {
        path:'',
        component:LaunchesTableComponent
    },
    {
        path:"rocketTable",
        component:RocketsComponent
    },
    {
        path:"payloadTable",
        component:PayloadComponent
    },
    {
        path:"youtubeLaunch",
        component:YoutubeLaunchComponent
    }
];
