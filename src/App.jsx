import { HomeTabContextProvider } from '@/context/hometabContext'
import { StateContextProvider } from '@/context/stateContext'

import View from '@/components/View'

function App () {
  return (
    <HomeTabContextProvider>
      <StateContextProvider>
        <View />
      </StateContextProvider>
    </HomeTabContextProvider>
  )
}

export default App
