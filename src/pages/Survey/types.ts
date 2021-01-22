import { QuoteResponse } from "../Quote/types";

export interface ICarBrands {
  _id: string;
  brand: string;
}

export interface ISurvey {
  onApprovedQuote: (quote: QuoteResponse) => void;
}
