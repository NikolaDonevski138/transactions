import { Action } from '@ngrx/store';

export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export const FILTER_TRANSACTIONS_BY_SEARCH = 'FILTER_TRANSACTIONS_BY_SEARCH';

export interface Transaction {
      amount: string,
      categoryCode?: string,
      merchant: string,
      merchantLogo?: string
      transactionDate?: number,
      transactionType?: 'Card Payment',
}

export class TransferMoney implements Action {
  readonly type = TRANSFER_MONEY;
  constructor(public payload: Transaction) {}
}

export class FilterTransactionsBySearch implements Action {
  readonly type = FILTER_TRANSACTIONS_BY_SEARCH;
  constructor(public payload: any) {}
}

export type TransactionsActions = TransferMoney | FilterTransactionsBySearch;
