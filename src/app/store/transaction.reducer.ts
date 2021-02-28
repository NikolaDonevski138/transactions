import * as fromActions from './transaction.actions'
import { Action } from '@ngrx/store';

export interface TransactionState {
    items: any[]
}


const initialState : TransactionState = {
    items: [
        'test'
    ]
}

export function transactionReducer(state: TransactionState  = initialState, action: Action){
     switch(action.type){
         case fromActions.TRANSFER_MONEY:
            return state
         default:
         return state;
     }
}