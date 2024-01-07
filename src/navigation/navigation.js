import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Colors } from "../constants/colors";
import Tara from "../screens/FotoScreen/tara";
import Yazma from "../screens/KeyBoardScreen/yazma";
import Cikti from "../screens/RecognizedScreen/recognized";
import Cozum from "../screens/SolveScreen/solve";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function HomeStack({ route }) {
//   const email = route.params;
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           borderTopWidth: 0,
//           backgroundColor: Colors.element1,
//         },
//         headerShown: false,
//         tabBarActiveTintColor: Colors.honeydew,
//         tabBarInactiveTintColor: Colors.anaEkranYazi,
//         tabBarLabelStyle: {
//           fontSize: 12, // Yazı boyutunu ayarla
//           fontWeight: "700",
//           flexWrap: "wrap",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Anasayfa"
//         component={HomeScreen}
//         initialParams={email}
//         options={{
//           tabBarLabel: "Anasayfa",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Test"
//         component={TestListe}
//         options={{
//           tabBarLabel: "Test",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="ab-testing"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Tablo"
//         component={LeaderboardScreen}
//         initialParams={email}
//         options={{
//           tabBarLabel: "Liderlik Tablosu",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="clipboard-list"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="Profil"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: "Profil",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       /> */}
//     </Tab.Navigator>
//   );
// }

export default function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tara"
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Group>
          <Stack.Screen name="Tara" component={Tara} />
          <Stack.Screen name="Cikti" component={Cikti} />
          <Stack.Screen name="Yazma" component={Yazma} />
          <Stack.Screen name="Cozum" component={Cozum} />
        </Stack.Group>
        {/* <Stack.Group>
          <Stack.Screen name="Home" component={HomeStack} />
          <Stack.Screen name="Gruplar" component={Gruplar} />
          <Stack.Screen name="KelimeKartiListe" component={KelimeKartlari} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="Testler" component={TestListe} />
          <Stack.Screen name="Eslestirme" component={EslestirmeTest} />
          <Stack.Screen name="Dinleme" component={DinlemeTest} />
          <Stack.Screen name="Yazma" component={YazmaTest} />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
