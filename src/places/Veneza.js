import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  StatusBar,
  Animated,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
// Imports icons
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// Import useFonts
import { useFonts } from "expo-font";

// Import useNavigation
import { useNavigation } from "@react-navigation/native";

// Import Hook USESTATE
import React, { useState, useEffect } from "react";
import { StylesConteudo } from "../styles/StylesConteudo";

//
const API_KEY = "03dd05e72c34ac72cadd07d2744007aa"; // Substitua com sua chave da API do OpenWeatherMap

const locationVeneza = [
  { latitude: 45.4408, longitude: 12.3155, title: "Veneza" },
];
const { height: DEVICE_HEIGHT } = Dimensions.get("window");

export default function Veneza() {
  const [vis, setVis] = useState(false);
  const [heightValue] = useState(new Animated.Value(0));
  const [visMap, setVisMap] = useState(false);
  const [location, setLocation] = React.useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "CormorantGaramond-Light": require("../assets/fonts/CormorantGaramond-Light.ttf"),
    "Caveat-VariableFont_wght": require("../assets/fonts/Caveat-VariableFont_wght.ttf"),
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
  });

  useEffect(() => {
    if (vis) {
      Animated.timing(heightValue, {
        toValue: DEVICE_HEIGHT,
        duration: 7000,
        useNativeDriver: false,
      }).start();
    }
  }, [vis, heightValue, DEVICE_HEIGHT]);

  useEffect(() => {
    if (vis === true) {
      fetchWeather();
    }
  }, [vis]);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locationVeneza[0].latitude}&lon=${locationVeneza[0].longitude}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      console.log(`Console.log response.data: ${weather}`);
    } catch (err) {
      console.log("Local não encontrado ou erro na requisição.");
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={StylesConteudo.container}>
      <View style={StylesConteudo.introduçao}>
        <View style={StylesConteudo.icons}>
          <TouchableOpacity
            style={StylesConteudo.btnVoltar}
            onPress={() => navigation.navigate("HomeStack")}
          >
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={StylesConteudo.btnMaps}
            onPress={() => setVisMap(true)}
          >
            <Fontisto name="world" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={StylesConteudo.header}>
          <View style={StylesConteudo.leftHeader}>
            <Text style={StylesConteudo.TxtNomecidade}>Veneza</Text>
            <Text style={StylesConteudo.TxtIntroduçaocidade}>
              Veneza, no norte da Itália, é formada por mais de 100 pequenas
              ilhas em uma lagoa no Mar Adriático. A cidade não tem estradas,
              apenas canais, repletos de palácios góticos e renascentistas.
            </Text>
            <TouchableOpacity
              style={StylesConteudo.btnMore}
              onPress={() => setVis(true)}
            >
              <Text style={StylesConteudo.TxtbtnMore}>MAIS</Text>
            </TouchableOpacity>
          </View>
          <View style={StylesConteudo.rigthHeader}>
            <Image
              source={require("../assets/images/venezaBackgroundremoveb.png")}
              style={{
                height: 280,
                width: 250,
                resizeMode: "contain",
                marginRight: -190,
                transform: [{ rotate: "350deg" }],
              }}
            />
          </View>
        </View>
      </View>
      <View style={StylesConteudo.Carossel}>
        <Text style={StylesConteudo.TxtNomecidade}>Fotos:</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={StylesConteudo.BodyScroll}>
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/veneza10.jpg")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/veneza.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/veneza12.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/veneza3.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/veneza5.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/veneza14.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/veneza7.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/veneza8.jpg")}
            />
          </View>
        </ScrollView>
      </View>

      <Modal visible={vis}>
        <StatusBar hidden />
        <Animated.View
          style={[StylesConteudo.Tamanhomodal, { height: heightValue }]}
        >
          <ImageBackground
            source={require("../assets/images/venezaponte2.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={StylesConteudo.headerModal}>
              <TouchableOpacity
                style={StylesConteudo.btnVoltar}
                onPress={() => {
                  setVis(false);
                  heightValue.setValue(0);
                }}
              >
                <FontAwesome name="arrow-left" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={StylesConteudo.CaixaModal}>
              <View style={StylesConteudo.TamanhoCaixamodal}>
                <View style={StylesConteudo.Localizaçao}>
                  <FontAwesome5 name="map-pin" size={30} color="#FFFFFF" />
                  <Text style={StylesConteudo.TxtLocalizaçao}>
                    Ponte de Rialto{"\n"}Veneza, Itália
                  </Text>
                </View>
                <View style={StylesConteudo.AlgLocalizaçao}></View>
                <View style={StylesConteudo.AlgInformaçao}>
                  <View style={StylesConteudo.AlgInformaçao2}>
                    <AntDesign name="star" size={24} color="#ffffff" />
                    <Text style={StylesConteudo.TxtLocalizaçao}>4.5</Text>
                  </View>
                  <View style={StylesConteudo.AlgInformaçao2}>
                    <FontAwesome6
                      name="temperature-empty"
                      size={24}
                      color="#ffffff"
                    />
                    <Text style={StylesConteudo.TxtLocalizaçao}>
                      {weather ? (
                        `${weather.main.temp} °C`
                      ) : (
                        <ActivityIndicator size="small" color="#ffffff" />
                      )}
                    </Text>
                  </View>
                  <View style={StylesConteudo.AlgInformaçao2}>
                    <Fontisto name="date" size={24} color="#ffffff" />
                    <Text style={StylesConteudo.TxtLocalizaçao}>7 days</Text>
                  </View>
                </View>
                <View style={StylesConteudo.TxtIntroduçaocidade}>
                  <Text style={{ color: "#FFFFFF", marginTop: 10 }}>
                    Descrição
                  </Text>
                  <Text style={{ color: "#FFFFFF" }}>
                    A Ponte de Rialto é a ponte em arco mais antiga e mais
                    famosa sobre o Grande Canal, na cidade italiana de Veneza.
                    Ela foi formalmente a única ligação permanente entre os dois
                    lados do Grande Canal, até abrirem as restantes travessias.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>
      </Modal>
      <Modal visible={visMap}>
        <View style={{ flex: 1 }}>
          {location && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0,
                longitudeDelta: 0.0,
                zoom: -20,
              }}
              provider={MapView.PROVIDER_GOOGLE} // Use Google Maps
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title={"Você esta aqui"}
                pinColor="blue" // Cor azul para destacar a localização atual
              />
              {locationVeneza.map((loc, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                  }}
                  title={loc.title}
                  description={loc.description}
                />
              ))}
            </MapView>
          )}

          <TouchableOpacity
            style={[StylesConteudo.btnVoltar, { marginTop: 50 }]}
            onPress={() => setVisMap(false)}
          >
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
