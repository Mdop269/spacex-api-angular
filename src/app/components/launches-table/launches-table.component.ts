import { AfterViewInit, Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { YoutubeLaunchComponent } from '../youtube-launch/youtube-launch.component';

@Component({
  selector: 'app-launches-table',
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './launches-table.component.html',
  styleUrl: './launches-table.component.css'
})


export class LaunchesTableComponent implements OnInit{
// launchtable is used for showing data in html
  launchTableData : any;

  // will store image url here \
  imageUrl !: string

  dataSource = new MatTableDataSource()

  // we will store columns name here 
  displayedColumns: string[] = ['mission_patch images', 'Mission Name', 'Launch Year', 'rocket Id', 'payload Id','actions'];

  // viewchild is use to access the html element here we are accessing mat paginator and 
  // static means is your data is pre defined so it will be true if the data is dynamic then it will be false 
  // we have to defined paginator to undefined 
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;


  // retriving the constructor 
  constructor(private ApiDataService : ApiDataService, public dialog: MatDialog){}

  // with this we are getting the data and then storing it to a variable it is a list as it is taking tons of space  
  ngOnInit() : void{
    this.ApiDataService.dataForLaunches().subscribe((data) => 
      {
        this.launchTableData = data,
        this.dataSource.data = this.launchTableData; // Assign fetched data to dataSource

      }  )
  }

  ngAfterViewInit(): void {
    // Ensure paginator is available before assignment
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  // whenever someone click on rocket id this function will be executed 
  rocketIdData(dataId:any){
    if(dataId){
      // storing the data in a variable 
      const rocketId = dataId
      // passing  the rocket id to the service function which is going to help in fetching the data 
      this.ApiDataService.fetchRocketData(rocketId)
    }
    else{
      console.log("No data for RocketId")  
    }
  }

  payloadIdData(dataId: string){
    if(dataId){
      // storing the data in a variable 
      const payloadId = dataId
      console.log(payloadId)
      // passing  the payload id to the service function which is going to help in fetching the data 
      this.ApiDataService.fetchPayloadData(payloadId)
    }
    else{
      console.log("No data for payloadId")  
    }
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(youtubeData: any){
    // in this we are defining the component in which our dialog will run \
    // {data: youtubeData } this is the data which we are sending to the dialog component it will know it is a value of the perticular row as we are sending direct from code 
    this.dialog.open(YoutubeLaunchComponent, {
      data: youtubeData,
      maxWidth: '60vw' 
    }) ;

  }

}

