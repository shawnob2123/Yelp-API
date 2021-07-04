import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);

// -5x7ZnFalPf1Y8RIcTAfdA (client ID)
// 7p4sLvry9sBFWjwEDsx0_7mUVJ-Hw0igQ19aHCuSBeqCHMOfQDdSLRRwRa22HnC0FnE1pK1hALlP2uIQuaMpOyX5hyvEhfD8vjz96ie2nNSw00FPHoUOEwTFkbV4YHYx (API Key)
