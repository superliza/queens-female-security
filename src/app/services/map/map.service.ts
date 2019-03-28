import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) {
    console.log('service ready to use!');
  }
}
