import View from '@/components/View'

import useBackground from '@/hooks/useBackground'

function App () {
  const { getNewWallpaper } = useBackground()
  getNewWallpaper()

  return (
    <>
      <View />
    </>
  )
}

export default App
