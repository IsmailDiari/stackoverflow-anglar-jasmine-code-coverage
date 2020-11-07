import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  getFlag(): Observable<string> {
    return of('-dev-');
  }
}
