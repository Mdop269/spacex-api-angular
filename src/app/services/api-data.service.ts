import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  // we are storing the launches url in a string this is not going to be called automatically
  urlForLaunches: string = "https://api.spacexdata.com/v3/launches"

  // we are creating a angular behaviour subject for passing the datas and all
  private rocketId = new BehaviorSubject<any | null>(null);
  //  a getter is a special type of property that allows you to define a function that returns a value
  // with get we can provide data type 
  get rocketId$(): Observable<string | null> {
    return this.rocketId.asObservable(); // A method that returns an Observable that wraps the BehaviorSubject
  }

  private payloadId = new BehaviorSubject<any | null>(null);
  get payloadId$(): Observable<string | null> {
    return this.payloadId.asObservable(); 
  }

  private youtubeId = new BehaviorSubject<any | null>(null);
  get youtubeId$(): Observable<string | null> {
    return this.youtubeId.asObservable(); 
  }
  
  // this is the simplest way but its not better way to use it as whenever we subscribe it will automatically call to all and with get it will 
  // explicitly call only for that and in this we cant provide data type
  // rocketId$ = this.rocketId.asObservable()
 // in this  it will call the http client and yeah we also need to provide in app.config.ts
  constructor(private http:HttpClient) { }

  // in this function we are getting the launches data and sending this data  to the component 
  dataForLaunches()
  {
    return this.http.get(this.urlForLaunches)
  }



  fetchRocketData(rocketId: string) {
    this.http.get(`https://api.spacexdata.com/v3/rockets/${rocketId}`).pipe(
      catchError(error => {
        console.error('Error fetching rocket data', error);
        return [null];  // Return null in case of error
      })
    ).subscribe(data => {
      this.rocketId.next([data]);  // Store the fetched data in the subject
    });
  }

  fetchPayloadData(payloadId: string) {
    this.http.get(`https://api.spacexdata.com/v3/payloads/${payloadId}`).pipe(
      catchError(error => {
        console.error('Error fetching payload data', error);
        console.error(`Payload ID ${payloadId} not found in the SpaceX API.`);
        return [null];  // Return null in case of error
      })
    ).subscribe(data => {
      this.payloadId.next([data]);  // Store the fetched data in the subject
    });
  }

  youtubeData(dataYoutube:string){
    this.youtubeId.next(dataYoutube)
  }

}
