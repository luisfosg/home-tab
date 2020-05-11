import { setStorage, deleteStorage } from '@/util/storage'

import { getWallpaper } from '@/functions/background'
import { refreshPins } from '@/functions/pin'
import { updateInputSearch } from '@/functions/search'
import { setInitialValues } from '@/functions/settings'

import { defaultQuery, defaultSearchEngine, searchEngine } from '@/config.json'

const resetSettings = () => {
  setStorage('query', defaultQuery)
  setStorage('defaultSearchEngine', defaultSearchEngine)
  setStorage('searchsEngine', searchEngine)

  deleteStorage('ownBg')

  setInitialValues()
  getWallpaper()
  refreshPins()
  updateInputSearch()
}

export default resetSettings
