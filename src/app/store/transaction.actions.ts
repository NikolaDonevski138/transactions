import { Action } from '@ngrx/store';

export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export const FILTER_TRANSACTIONS_BY_SEARCH = 'FILTER_TRANSACTIONS_BY_SEARCH';
export const SORT_COLLECTION = 'SORT_COLLECTION';
export const SORT_BY_BENEFICIARY = 'SORT_BY_BENEFICIARY';
export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';

export interface Transaction {
  amount: string;
  categoryCode?: string;
  merchant: string;
  merchantLogo?: string;
  transactionDate?: number;
  transactionType?: 'Card Payment';
}

export class TransferMoney implements Action {
  readonly type = TRANSFER_MONEY;
  constructor(public payload: Transaction) {}
}

export class FilterTransactionsBySearch implements Action {
  readonly type = FILTER_TRANSACTIONS_BY_SEARCH;
  constructor(public searchText: string) {}
}

export class SortCollection implements Action {
  readonly type = SORT_COLLECTION;
  constructor(public payload: any) {}
}

export class SortByBeneficiary implements Action {
  readonly type = SORT_BY_BENEFICIARY;
}

export class SortByAmount implements Action {
  readonly type = SORT_BY_AMOUNT;
}

export type TransactionsActions =
  | TransferMoney
  | FilterTransactionsBySearch
  | SortCollection
  | SortByBeneficiary
  | SortByAmount;
