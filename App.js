import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { NavigationService } from './src/services/NavigationService'
import { white } from './src/styles/colors'
import RootNavigator from './src/navigation/switchNavigator'
import { persistor, store } from './src/redux/storeConfig'

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <RootNavigator
            ref={ref => {
              if (ref != null) {
                NavigationService.setTopLevelNavigator(ref)
              }
            }}
          />
              {/*<PersistGate loading={null} persistor={persistor}>
            </PersistGate>*/}
        </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
})
