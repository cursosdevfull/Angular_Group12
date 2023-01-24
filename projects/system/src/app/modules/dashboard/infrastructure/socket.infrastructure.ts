import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as io from 'socket.io-client';

import { Graph } from '../domain/graph.interface';
import { SocketRepository } from '../domain/socket.repository';

@Injectable()
export class SocketInfrastructure implements SocketRepository {
  private socket: io.Socket;

  constructor() {
    this.socket = io.connect('http://localhost:4000');
  }

  listen(eventName: string): Observable<Graph[]> {
    return new Observable((observer: Observer<Graph[]>) => {
      this.socket.on(eventName, (data: Graph[]) => {
        observer.next(data);
      });
    });
  }
}
