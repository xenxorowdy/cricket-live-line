import { Slot, Stack, Tabs } from "expo-router";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, View } from "react-native";
import CusText from "../component/CusText";
const { Navigator } = createMaterialTopTabNavigator();
function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap:20 ,width:340,justifyContent:"flex-start"}} >
    <Image
      style={{ width: 35, height: 35, borderRadius: 20 }}
      source={ require('../../assets/Designer.png') }
      />
      <CusText style={{fontSize:20,fontWeight:600}}>Home</CusText>
      </View>
  );
}
export default function HomeLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            // headerTitle: "Home",
            title: "index",
            tabBarActiveTintColor: '#11BA8C',
            tabBarIcon: ({ color }) => <FontAwesome size={22} name="home" color={color} />,
            headerStyle: { backgroundColor: '#a393eb' },
          headerTintColor: '#a393eb',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#a393eb',
            backgroundColor:'#a393eb',
          },
headerTitle: props => <LogoTitle {...props} />,
          }}
          
        />
        <Tabs.Screen
          name="users/[id]"
          options={{
            headerShown:false,
            headerTitle: "Upcoming Matches",
            tabBarActiveTintColor: '#11BA8C',
            title: "Upcoming Matches",
            tabBarIcon: ({ color }) => <FontAwesome size={22} name="calendar" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
