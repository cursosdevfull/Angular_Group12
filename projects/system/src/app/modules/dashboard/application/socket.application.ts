import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Graph } from '../domain/graph.interface';
import { SocketRepository } from '../domain/socket.repository';
import { SocketInfrastructure } from '../infrastructure/socket.infrastructure';

@Injectable()
export class SocketApplication {
  constructor(
    @Inject(SocketInfrastructure) private readonly socket: SocketRepository
  ) {}

  listen(eventName: string): Observable<Graph[]> {
    return this.socket.listen(eventName);
  }
}
