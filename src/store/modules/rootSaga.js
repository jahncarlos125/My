import {all} from 'redux-saga/effects';

import users from './users/sagas';
import address from './address/sagas';

export default function* rootSaga() {
  return yield all([users, address]);
}
