import { setStorage, getStorage } from '@/util/storage'

import { defaultQuery } from '@/config.json'

export const getQuery = () => {
  const queryStorage = getStorage('query')

  if (!queryStorage) setStorage('query', defaultQuery)

  return queryStorage || defaultQuery
}

export const configQuery = (newValue) => {
  setStorage('query', newValue)
  return true
}
