const config = {
  axios: {
    baseURL: 'https://api.github.com'
  },

  respBody(response) {
    return {
      data: response.data,
      status: response.status,
      headers: response.headers
    }
  },

  respError(error) {
    return {
      status: error.response.status,
      description: error.response.data.description
    }
  }
}

export default config
