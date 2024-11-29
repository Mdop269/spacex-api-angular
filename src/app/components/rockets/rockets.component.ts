import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-rockets',
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './rockets.component.html',
  styleUrl: './rockets.component.css'
})
export class RocketsComponent implements OnInit{

  rocketData: any[] = []
  displayedColumns: string[] = ['Rocket Id', 'Mission Name', 'Launch Year', 'rocket Id'];

  constructor(private ApiDataService: ApiDataService){
  }
  ngOnInit(){
    this.ApiDataService.rocketId$.subscribe(data =>{
      if (data !=null){
        this.rocketData = [... data]
        console.log(this.rocketData)
      }
    });
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }

}
