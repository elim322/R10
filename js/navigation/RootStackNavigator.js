import { createStackNavigator, createAppContainer } from "react-navigation";
import AboutStack from "./NavigationLayout";
import NavigationLayout from "./NavigationLayout";

const AppNavigator = createStackNavigator(
  {
    Navlayout: NavigationLayout
    // About: AboutStack
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
