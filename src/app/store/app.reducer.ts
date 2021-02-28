import {ActionReducerMap} from '@ngrx/store';

import * as transactionReducer from './transaction.reducer'

export interface AppState {
    transaction: transactionReducer.TransactionState
}

export const appReducer: ActionReducerMap<AppState> = {
    transaction: transactionReducer.transactionReducer
}