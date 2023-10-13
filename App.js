
import * as React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './Pages/Page1.js';
import Page3 from './Pages/Page3.js'
import Page2 from './Pages/Page2.js'
import Page4 from './Pages/Page4.js'



const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#fff',
  }
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        initialRouteName='Page4'
      >
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
        <Tab.Screen name="Page3" component={Page3} />
        <Tab.Screen name="Page4" component={Page4}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}