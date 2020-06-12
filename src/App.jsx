import { HomeTabContextProvider } from '@/context/hometabContext'

import View from '@/components/View'

function App () {
  return (
    <HomeTabContextProvider>
      <View />
    </HomeTabContextProvider>
  )
}

export default App
