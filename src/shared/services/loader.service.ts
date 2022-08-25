import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  private loaderStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  getLoaderStatus(): Observable<boolean> {
    return this.loaderStatus.asObservable();
  }

  setLoaderStatus(loaderStatus: boolean) {
    this.loaderStatus.next(loaderStatus);
  }
}