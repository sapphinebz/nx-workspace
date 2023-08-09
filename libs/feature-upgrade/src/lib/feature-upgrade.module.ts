import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDataModule } from '@nx-workspace/flight-data';

@NgModule({
  imports: [CommonModule, FlightDataModule],
})
export class FeatureUpgradeModule {}
