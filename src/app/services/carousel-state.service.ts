import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselStateService {
  private _isActive = new BehaviorSubject<boolean>(true);
  public readonly isActive$ = this._isActive.asObservable();

  setActive(state: boolean) {
    this._isActive.next(state);
  }
}