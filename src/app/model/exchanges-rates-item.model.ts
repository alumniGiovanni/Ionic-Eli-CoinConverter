import { ExchangeRates } from './exchanges-rates.model';

export interface ExchangeRateItem {
  base: string;
  date: string;
  rates: ExchangeRates;
}
