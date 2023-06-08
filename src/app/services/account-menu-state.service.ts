import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountMenuStateService {
  private _isAccount = new BehaviorSubject<boolean>(true);
  public readonly isAccount$ = this._isAccount.asObservable();

  setActive(state: boolean) {
    this._isAccount.next(state);
  }
}
