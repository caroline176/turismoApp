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

import MapView, { Marker } from "react-native-maps";
import axios from "axios";
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
const { height: DEVICE_HEIGHT } = Dimensions.get("window");

const API_KEY = "03dd05e72c34ac72cadd07d2744007aa"; // Substitua com sua chave da API do OpenWeatherMap

const locationToquio = [
  {
    latitude: 35.6895,
    longitude: 139.6917,
    title: "Tóquio",
  },

  // Adicione mais localizações conforme necessário
];

export default function Toquio() {
  const [vis, setVis] = useState(false);
  const [heightValue] = useState(new Animated.Value(0));
  const [visMap, setVisMap] = useState(false);
  const navigation = useNavigation();

  const [weather, setWeather] = useState(null);
  const [fontsLoaded] = useFonts({
    "CormorantGaramond-Light": require("../assets/fonts/CormorantGaramond-Light.ttf"),
    "Caveat-VariableFont_wght": require("../assets/fonts/Caveat-VariableFont_wght.ttf"),
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
  });

  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
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
        `https://api.openweathermap.org/data/2.5/weather?lat=${locationToquio[0].latitude}&lon=${locationToquio[0].longitude}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      console.log(` Console.log response.data: ${weather}`);
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
            <Text style={StylesConteudo.TxtNomecidade}>Tóquio</Text>
            <Text style={StylesConteudo.TxtIntroduçaocidade}>
              Capital agitada do Japão, combina o estilo ultramoderno com o
              tradicional, desde arranha-céus iluminados por neon a templos
              históricos.
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
              source={require("../assets/images/tokyoIcon2.png")}
              style={{
                transform: [{ rotate: "0deg" }],
                width: 200,
                height: 200,
                left: 75,
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
              source={require("../assets/images/toquio1.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/toquio2.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/toquio3.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/toquio9.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/toquio5.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/toquio6.jpeg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/toquio7.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/toquio8.jpeg")}
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
            source={require("../assets/images/toquiobackground.jpg")}
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
                    Tokyo Skytree{"\n"}Toquio, Japão
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
                    A Tokyo Skytree é uma torre de radiodifusão, usada como
                    canal de televisão, restaurante e ponto turístico. Possuí
                    634 metros de altura, tornando-se a mais alta estrutura do
                    Japão e segunda maior do mundo.
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
              {locationToquio.map((loc, index) => (
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
