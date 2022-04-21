import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'binance-profit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.service.getProfit();

  constructor(private service: AppService) {}
}
