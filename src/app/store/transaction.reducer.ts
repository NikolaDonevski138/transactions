import * as fromActions from './transaction.actions';
import { Action } from '@ngrx/store';
import { ActionSequence } from 'protractor';
import { itemDtos } from './mock-data/item.dto.mock';
import { ItemDto } from '../shared/models/item.dto';


export interface TransactionState {
  items: ItemDto[];
  searchText: string;
  filteredItems: ItemDto[]
}

const initialState: TransactionState = {
  items: itemDtos,
  searchText: '',
  filteredItems: itemDtos
};

export function transactionReducer(
  state: TransactionState = initialState,
  action: any
) {
  // console.log('action.type', action.type)
  switch (action.type) {
    case fromActions.TRANSFER_MONEY:
      return {
        ...state,
        items: [action.payload, ...state.items],
        filteredItems: [action.payload, ...state.filteredItems]
      };

    case fromActions.FILTER_TRANSACTIONS_BY_SEARCH: {
      const { searchText } = action as fromActions.FilterTransactionsBySearch;
      const searchTerm = searchText.trim().toLowerCase();
      return {
        ...state,
        filteredItems: state.items.filter((item) => 
          item.merchant.toLowerCase().includes(searchTerm)
          || item.amount.toString().includes(searchTerm)
        )
      };
    }
    

    case fromActions.SORT_COLLECTION: {
      const sortedCollection = state.filteredItems.slice().sort((a: any, b: any) => {
        let dateA = a.transactionDate;
        let dateB = b.transactionDate;
        if (action.payload === 'descending') {
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
        }
        if (action.payload === 'ascending') {
          if (dateA < dateB) {
            return 1;
          }
          if (dateA > dateB) {
            return -1;
          }
        }
        return 0;
      });
      console.log(sortedCollection, 'sortirana kolekcija');

      return {
        ...state,
        filteredItems: [...sortedCollection],
      };
    }

    case fromActions.SORT_BY_AMOUNT:{
      const sortedItemsByAmount = state.filteredItems.slice().sort((a: any, b: any) => {
        let amountA = +a.amount;
        let amountB = +b.amount;
        if (amountA < amountB) {
          return -1;
        }
        if (amountA > amountB) {
          return 1;
        }
        // if (amountA < amountB) {
        //   return 1;
        // }
        // if (amountA > amountB) {
        //   return -1;
        // }
        return 0;
      });
      return {
        ...state,
        filteredItems: [...sortedItemsByAmount],
      };
    }
    default:
      return state;
  }
}
