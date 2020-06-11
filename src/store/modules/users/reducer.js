import {produce} from 'immer';

export default function users(state = {users: []}, action) {
  switch (action.type) {
    case '@users/ADD_USER':
      return produce(state, (draft) => {
        draft.users.push(action.data);
      });
    default:
      return state;
  }
}
