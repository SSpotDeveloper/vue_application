import { createStore } from 'vuex'

export default createStore({
  state: {
    FakeAuthenticated: {
      State: false,
      User: {
        Email: '',
      },
    },
    Authenticated: {
      User: {},
      accessToken: {
        Token: '',
        Expiry: '',
        refresheToken: '',
        tokenType: '',
      }

    }
  },
  getters: {
    getFakeAuthenticatedState: state => {
      return state.FakeAuthenticated.State;
    },
    getFakeUser: state => {
      return state.FakeAuthenticated.User;
    },
    getAuthenticatedState: state => {
      return state.Authenticated.accessToken !== '';
    },
    getUser: state => {
      return state.Authenticated.User;
    },
    getAccess: state => {
      return state.Authenticated.accessToken;
    },
  },
  mutations: {
    setFakeAuthenicatedState(state, sessionState){
      state.FakeAuthenticated.State = sessionState
    },
    setFakeUser(state, user){
      state.FakeAuthenticated.User.Email = user;
    },
    setAuthenticatedState(state, user){
      state.Authenticated.User = user;
    },
    setAccessToken(state, token){
      state.Authenticated.accessToken.Token = token
    },
    setExpiry(state, expiry){
      state.Authenticated.accessToken.Expiry = expiry
    },
    setRefreshToken(state, token){
      state.Authenticated.accessToken.refresheToken = token
    },
    setTokenType(state, type){
      state.Authenticated.accessToken.tokenType = type
    }
  },
  actions: {
  },
  modules: {
  }
})
