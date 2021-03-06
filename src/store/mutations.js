import {
  REQUESTING,
  REQUEST_ERROR,
  REQUEST_SUCCESS
} from './mutations_type'

export default {
  [REQUESTING] (state) {
    state.firstView = false
    state.loading = true
  },
  [REQUEST_SUCCESS] (state, users) {
    state.loading = false
    state.users = users
  },
  [REQUEST_ERROR] (state, msg) {
    state.loading = false
    state.errorMsg = msg
  }
}
