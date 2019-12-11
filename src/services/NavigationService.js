import { NavigationActions, StackActions } from 'react-navigation'

let _navigator

export const NavigationService = {
  setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
  },
  
  navigate(routeName, params) {
    _navigator.dispatch(NavigationActions.navigate({ routeName: routeName, params: params }))
  },
  
  push(routeName, params) {
    _navigator.dispatch(NavigationActions.push({ routeName: routeName, params: params }))
  },
  
  pop(n, params) {
    _navigator.dispatch(StackActions.pop({ n: n, params: params }))
  },

  setParams(key, params) {
    _navigator.dispatch(NavigationActions.setParams({ key: key, params: params }))
  },
}
