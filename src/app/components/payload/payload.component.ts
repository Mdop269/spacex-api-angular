import { Component } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-payload',
  imports: [
    MatExpansionModule
  ],
  templateUrl: './payload.component.html',
  styleUrl: './payload.component.css'
})
export class PayloadComponent {
  payloadData: any[] = []

  constructor(private ApiDataService: ApiDataService){
  }
  ngOnInit(){
    this.ApiDataService.payloadId$.subscribe(data =>{
      if (data !=null){
        this.payloadData = [... data]
        console.log(this.payloadData)
      }
    });
  }
}

