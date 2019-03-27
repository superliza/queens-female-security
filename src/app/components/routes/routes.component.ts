import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

}
