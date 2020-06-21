import {produce} from 'immer';

export default function users(state = {address: []}, action) {
  switch (action.type) {
    case '@address/ADD_ADDRESS':
      return produce(state, (draft) => {
        draft.address.push(action.data);
      });
    default:
      return state;
  }
}
