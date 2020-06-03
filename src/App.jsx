import { HomeTabContextProvider } from '@/context/hometabContext'
import useBackground from '@/hooks/useBackground'

import View from '@/components/View'

function App () {
  const { getNewWallpaper } = useBackground()
  getNewWallpaper()

  return (
    <HomeTabContextProvider>
      <View />
    </HomeTabContextProvider>
  )
}

export default App
