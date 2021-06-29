import axios from 'axios'
import { camelCase, snakeCase, isPlainObject } from 'lodash'
import qs from 'qs'
import config from './config'

class Axios {
  constructor() {
    const _axios = axios.create(config.axios)
    _axios.interceptors.request.use(
      this.handleSuccessRequest,
      this.handleErrorRequest
    )
    _axios.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    )
    this._axios = _axios
  }

  transformToCase = (caseFunc, data) => {
    if (Array.isArray(data)) {
      return data.map((item) => this.transformToCase(caseFunc, item))
    } else if (isPlainObject(data)) {
      return Object.keys(data).reduce((result, key) => {
        result[caseFunc(key)] = this.transformToCase(caseFunc, data[key])
        return result
      }, {})
    }
    return data
  }

  handleSuccessRequest = (req) => {
    req.params = this.transformToCase(snakeCase, req.params)
    req.data = this.transformToCase(snakeCase, req.data)

    console.groupCollapsed(
      '%c%s',
      'font-size: 11.5px;',
      `API request: ${req.url}`
    )
    console.log(`Method: ${req.method}`)
    console.log(`URL: ${req.url}`)
    console.log(`Query: ${JSON.stringify(req.params)}`)
    console.log(`Body: ${JSON.stringify(req.data)}`)
    console.groupEnd()

    return req
  }

  handleErrorRequest = (error) => {
    // eslint-disable-next-line no-undef
    return Promise.reject(error)
  }

  handleSuccessResponse = (response) => {
    response.data = this.transformToCase(camelCase, response.data)

    console.groupCollapsed(
      '%c%s',
      'font-size: 11.5px;',
      `API response: ${response.config.url}`
    )
    console.log(`Method: ${response.config.method}`)
    console.log(`Url: ${response.config.url}`)
    console.log(`Status: ${response.status}`)
    console.log('Data ⟱')
    console.log(response.data)
    console.log('Response ⟱')
    console.log(response)
    console.groupEnd()

    return config.respBody(response)
  }

  handleErrorResponse = (error) => {
    const errorData = config.respError(error)

    let errorMsg = `API response: ${error.response.config.url} with Status: ${errorData.status}`
    if (errorData.description)
      errorMsg += ` and description: "${errorData.description}"`
    console.error(errorMsg)

    // eslint-disable-next-line no-undef
    return Promise.reject(errorData)
  }

  async get(url, data) {
    let resp
    if (!data.repeat) {
      if (!data.params) {
        resp = await this._axios.get(url)
      } else {
        resp = await this._axios.get(url, {
          params: {
            ...data.params
          }
        })
      }
    } else {
      resp = await this._axios.get(url, {
        params: {
          ...data.params
        },
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'repeat' })
      })
    }
    return resp
  }

  async post(url, data, headers = null) {
    let resp
    if (!headers) {
      resp = await this._axios.post(url, data)
    } else {
      resp = await this._axios.post(url, data, headers)
    }
    return resp
  }

  async patch(url, data, headers = null) {
    let resp
    if (!headers) {
      resp = await this._axios.patch(url, data)
    } else {
      resp = await this._axios.patch(url, data, headers)
    }
    return resp
  }

  async delete(url) {
    try {
      const resp = await this._axios.delete(url)
      return resp
    } catch (error) {
      return error
    }
  }
}

export default new Axios()
