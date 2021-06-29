import axios from '../index'

export const _getEvents = (data, paging) =>
  axios.get(`/events?page=${paging.page}&per_page=${paging.count}`, data)

