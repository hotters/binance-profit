import { Injectable } from '@nestjs/common';
import { Message } from '@binance-profit/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    const profit = Math.random() * (10 ** (Math.round(Math.random() * 10)));
    return { message: `Your profit is $${Math.round(profit)}` };
  }
}
