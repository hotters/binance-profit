import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@binance-profit/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getProfit() {
    return this.http.get<Message>('api/hello');
  }
}
