import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import Speaker from "../screen/Speaker/Speaker";

const AppNavigator = createStackNavigator(
  {
    Navlayout: NavigationLayout,
    Speaker: {
      screen: Speaker
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
