import { Component } from '@angular/core';
import { FlightDataService } from '@nx-workspace/flight-data';

@Component({
  selector: 'nx-workspace-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  flightList$ = this.flightService.load();

  constructor(private flightService: FlightDataService) {}
}
