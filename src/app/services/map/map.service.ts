import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) {
    console.log('service ready to use!');
  }

  getGeocode() {
    // tslint:disable-next-line:max-line-length
    this.httpClient.get('https://geocoder.api.here.com/6.2/geocode.json?app_id=PM3vqGKWncDufkVT0Xb7&app_code=CNqqAVCdPpHH_Yhs7PcLdA&searchtext=425+W+Randolph+Chicago').subscribe(data => {
      console.log(data);
    });
  }
}
