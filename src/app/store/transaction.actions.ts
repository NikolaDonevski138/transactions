import {Action} from '@ngrx/store'

export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export interface Transaction {
    toAccount:string,
    amount:string,
}

export class TransferMoney implements Action {
    readonly type = TRANSFER_MONEY;
    constructor(public payload: Transaction){}
}

export type TransactionsActions = TransferMoney 