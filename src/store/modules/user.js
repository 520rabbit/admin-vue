import { login } from "@/api/request/user"
import { getToken, setToken } from '@/utils/cookie'
const getDefaultState = () => {
  return {
    token: getToken(),
  }
}
const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
}

const actions = {
  async handleLogin( { commit }, loginForm) {
    let res = await login(loginForm)
    console.log(res)
    return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

