import axios from 'axios'
import config from './index'

axios.defaults.baseURL = config.SERVER_HOST
axios.defaults.headers.common['Content-Type'] = 'application/json'

export default {
  //Needed for mobile devices epub reader view

  get (url, authToken) {

    axios.defaults.headers.common['Authorization'] = authToken

      return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        })
      })
  },
  post (url, authToken, body) {
    axios.defaults.headers.common['Authorization'] = authToken

    return new Promise((resolve, reject) => {
      axios.post(url, body).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    })
  },
  put (url, authToken, body) {
    axios.defaults.headers.common['Authorization'] = authToken

    return new Promise((resolve, reject) => {
      axios.put(url, body).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    })
  },
  putS3 (url, file, fileType) {
    axios.defaults.headers.common['Content-Type'] = fileType
    return axios.put(url, file)
  },
  postfile (url,authToken,langCode, file) {
    axios.defaults.headers.common['Authorization'] = authToken
    axios.defaults.headers.common['Accept-Language'] = langCode
    axios.defaults.headers.common['Content-Type'] = false
    return axios.post(url, file)
  },
  getWithoutAuth (url, langCode) {
    axios.defaults.headers.common['Accept-Language'] = langCode
    return axios.get(url)
  },
  postWithoutAuth (url, langCode, body) {
    axios.defaults.headers.common['Accept-Language'] = langCode
    return axios.post(url, body)
  },
  delete (url, authToken, langCode, body) {
    axios.defaults.headers.common['Authorization'] = authToken
    axios.defaults.headers.common['Accept-Language'] = langCode
    return axios.delete(url, body)
  },
  all (promises) {
    return axios.all(promises)
  }
}
