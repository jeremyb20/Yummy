import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/common/services/locations.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  located: boolean;

  paises: any[];

  constructor(private locationsService: LocationsService) {
    this.lat = 40;
    this.lng = -3;
    this.zoom = 6;
    this.mapTypeId = 'roadmap';
    this.located = false;
  }

  ngOnInit() {
    this.locationsService.getAll()
    .then(paises => this.paises = paises)
    .catch(errr => console.log(errr));
  }
  
  getCurrentPosition() {
    //Esta funcion mantiene mi poosition actual
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
  
      console.log(this.lat, 'Latitud');
      console.log(this.lng, 'Longitud');
  });
}

}
