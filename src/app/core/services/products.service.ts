import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);
  constructor() { }


  getDolls() {
    return this.http.get('assets/data.json').pipe(map((res: any) => res['dolls']));
  }

}
