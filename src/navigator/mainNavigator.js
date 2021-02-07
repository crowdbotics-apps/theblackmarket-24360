import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard114202137Navigator from '../features/Dashboard114202137/navigator';
import ArticleList202114Navigator from '../features/ArticleList202114/navigator';
import ArticleList202113Navigator from '../features/ArticleList202113/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard114202137: { screen: Dashboard114202137Navigator },
ArticleList202114: { screen: ArticleList202114Navigator },
ArticleList202113: { screen: ArticleList202113Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
