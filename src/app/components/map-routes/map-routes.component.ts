import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MapService } from '../../services/map/map.service';

declare var H: any;

@Component({
  selector: 'app-map-routes',
  templateUrl: './map-routes.component.html',
  styleUrls: ['./map-routes.component.css']
})
export class MapRoutesComponent implements OnInit {

  @ViewChild('map')
  public mapElement: ElementRef;

  @Input() appId: any;
  @Input() appCode: any;
  @Input() lat: any;
  @Input() lng: any;
  @Input() width: any;
  @Input() height: any;

  private platform: any;
  private map: any;
  private ui: any;
  private search: any;

  constructor(private mapService: MapService) {
    // this.mapService.getGeocode();
  }

  ngOnInit() {
    this.platform = new H.service.Platform({
      app_id: this.appId,
      app_code: this.appCode
    });
    this.search = new H.places.Search(this.platform.getPlacesService());
  }

  ngAfterViewInit() {
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }

  places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    this.search.request({
      q: query,
      at: this.lat + ',' + this.lng
    }, {}, data => {
      for (let index = 0; index < data.results.items.length; index++) {
        this.dropMarker({
          lat: data.results.items[index].position[0],
          lng: data.results.items[index].position[1]
        }, data.results.items[index]);
      }
    }, error => {
      console.error(error);
    });
  }

  private dropMarker(coordinates: any, data: any) {
    const marker = new H.map.Marker(coordinates);
    marker.setData('<p>' + data.title + '<br>' + data.vicinity + '</p>');
    marker.addEventListener('tap', event => {
      const bubble = new H.ui.InfoBubble(event.target.getPosition(), {
        content: event.target.getData()
      });
      this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }

}
