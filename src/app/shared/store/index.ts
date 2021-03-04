import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as transactionReducer from './transaction.reducer';

export const getTransaction = (state: AppState) => state.transaction;

export const getItems = createSelector(
  getTransaction,
  (transactionState: transactionReducer.TransactionState) =>
    transactionState.items
);

export const getFilteredItems = createSelector(
  getTransaction,
  (transactionState: transactionReducer.TransactionState) =>
    transactionState.filteredItems
);

export interface AppState {
  transaction: transactionReducer.TransactionState;
}

export const appReducer: ActionReducerMap<AppState> = {
  transaction: transactionReducer.transactionReducer,
};
