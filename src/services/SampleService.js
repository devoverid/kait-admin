import { Http } from '../utils'

export default class SampleService {
  /**
   * getting user list from api
   * @return Promise(data)
   */
  getUser = () => {
    return new Promise((resolve, reject) => {
      Http.get('/api/users?page=2')
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}