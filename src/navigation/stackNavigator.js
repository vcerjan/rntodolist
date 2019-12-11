import { createStackNavigator } from 'react-navigation-stack'

import { HomeScreen, OtherScreen } from '../screens/index'
import { darkBlue, white } from '../styles/colors'

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: darkBlue,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: white
    },
  },
})

export default HomeNavigator