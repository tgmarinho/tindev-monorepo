import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('tindevmonorepo', () => App)
AppRegistry.runApplication('tindevmonorepo', {
  rootTag: document.getElementById('root'),
})
