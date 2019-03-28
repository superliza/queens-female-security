import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map/map.service';

@Component({
  selector: 'app-map-routes',
  templateUrl: './map-routes.component.html',
  styleUrls: ['./map-routes.component.css']
})
export class MapRoutesComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

}
