import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList202115Navigator from '../features/ArticleList202115/navigator';
import ArticleList202114Navigator from '../features/ArticleList202114/navigator';
import ArticleList202113Navigator from '../features/ArticleList202113/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList202115: { screen: ArticleList202115Navigator },
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
