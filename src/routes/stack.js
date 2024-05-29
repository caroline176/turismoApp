// Import Page Home
import Home from "../pages/Home";

// Import Places Pages
import Londres from "../places/Londres";
import NewYork from "../places/NewYork";
import Paris from "../places/Paris";
import RioDeJaneiro from "../places/RioDeJaneiro";
import Toquio from "../places/Toquio";
import Dubai from "../places/Dubai";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Veneza from "../places/Veneza";
import Passeios from "../pages/Passeios";
import CarrinhoLondres from "../pages/CarrinhoLondres";

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Londres"
        component={Londres}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="NewYork"
        component={NewYork}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RioDeJaneiro"
        component={RioDeJaneiro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Paris"
        component={Paris}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Toquio"
        component={Toquio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dubai"
        component={Dubai}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Veneza"
        component={Veneza}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Passeios"
        component={Passeios}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CarrinhoLondres"
        component={CarrinhoLondres}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
