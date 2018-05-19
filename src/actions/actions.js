import { getItemsFromFakeXHR, addItemToFakeXHR } from '../db/inventory.db'  

export const ADD_ITEM = 'ADD_ITEM';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export function addItem(item) {
  return dispatch => {
    addItemToFakeXHR(item)
      .then( ({items}) => {
        dispatch({
          type: ADD_ITEM,
          items: items
        })
      })
  }
}

export function getAllItems() {
  return dispatch => {
    getItemsFromFakeXHR()
      .then( items => {
        dispatch({
          type: GET_ALL_ITEMS,
          items: items
        })
      })
  }
}

export function makeLotsOfFlashyThingsInUI(message) {
  return {
    type: 'MAKE_THE_FLASH',
    data: message
  }
}
