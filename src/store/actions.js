import {
  REQUESTING,
  REQUEST_ERROR,
  REQUEST_SUCCESS
} from './mutations_type'
import axios from 'axios'

export default {
  async search ({commit}, searchName) {
    // 更新状态数据
    commit(REQUESTING)
    // 发送ajax获取users数据
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const res = await axios(url)
      const users = res.data.items.map(item => ({
        username: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      // 请求成功，更新状态
      commit(REQUEST_SUCCESS, users)
    } catch (error) {
      // 请求失败，更新状态
      commit(REQUEST_ERROR, error)
    }
  }
}
