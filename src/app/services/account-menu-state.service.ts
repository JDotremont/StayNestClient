import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountMenuStateService {

  private _isAccount = new BehaviorSubject<boolean>(false);
  public isAccount$ = this._isAccount.asObservable();

  constructor(private zone: NgZone) { }

  setActive(state: boolean) {
    this.zone.run(() => {
      this._isAccount.next(state);
    });
  }
}
