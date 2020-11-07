import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FlagModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  private flagModel: FlagModel = {
    flagDescription: [{ code: '-dev-', desc: 'lorem' }],
    employeeFlag: 'lorem',
    region: { code: '-dev', desc: 'lorem' },
    user: 'lorem',
  };
  getFlag(): Observable<FlagModel> {
    return of(this.flagModel);
  }
}
