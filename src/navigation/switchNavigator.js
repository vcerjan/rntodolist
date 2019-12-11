import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { IntroScreen } from '../screens/index'
import HomeNavigator from './stackNavigator'

const rootNavigator = createSwitchNavigator({
    Intro: IntroScreen,
    Home: HomeNavigator,
  },
  {
    initialRouteName: 'Intro',
  },
)

export default createAppContainer(rootNavigator)
