import { Component, OnInit } from '@angular/core';

import { SocketApplication } from '../../application/socket.application';
import { Graph } from '../../domain/graph.interface';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  view: [number, number] = [500, 450];
  legend = true;
  legendPosition = 'right';
  legendTitle = 'Vaccums';
  gradient = true;
  doughnut = true;

  data: Graph[] = [];

  constructor(private readonly socket: SocketApplication) {}

  ngOnInit(): void {
    this.socket.listen('dataupdate').subscribe((data: Graph[]) => {
      this.data = data;
    });
  }
}
