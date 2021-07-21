import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Platform } from "react-native";

import Colors from "../constants/Colors";

// Screens
import AllPlacesScreen from "../screens/AllPlaces";
import EditPlaceScreen from "../screens/EditPlace";
import MapScreen from "../screens/Map";
import PlaceDetailsScreen from "../screens/PlaceDetails";

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
	},
	headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
};

const PlacesNavigator = createStackNavigator(
	{
		Places: {
			screen: AllPlacesScreen,
		},

		PlaceDetails: {
			screen: PlaceDetailsScreen,
		},

		Map: {
			screen: MapScreen,
		},

		EditPlace: {
			screen: EditPlaceScreen,
		},
	},
	{ defaultNavigationOptions }
);

export default createAppContainer(PlacesNavigator);
