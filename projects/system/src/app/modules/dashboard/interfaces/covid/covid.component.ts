import { Component, OnInit } from '@angular/core';

import { CovidApplication } from '../../application/covid.application';
import { Graph } from '../../domain/graph.interface';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  view: [number, number] = [700, 450];
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  showLegend = false;
  xAxisLabel = 'Countries';
  yAxisLabel = 'Confirmed cases';

  data: Graph[] = [];

  constructor(private readonly covidApplication: CovidApplication) {}

  ngOnInit(): void {
    this.covidApplication.getGraph().subscribe((data) => {
      this.data = data.map((el) => ({ name: el.country, value: el.confirmed }));
    });
  }
}
