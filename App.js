import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { userFonts } from 'expo-font';
import { Home } from './screens/Home';
import { Details } from './screens/Details';

const Stack = createStackNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: 'transparent',
	}
}

const App = () => {
  return (
		<NavigationContainer theme={ theme }>
			<Stack.Navigator screenOptions={ { headerShown: false } } initialRouteName='Home'>
				<Stack.Screen name='Home' component={ Home } />
				<Stack.Screen name='Details' component={ Details } />
			</Stack.Navigator>
		</NavigationContainer>
  );
}

export default App;
