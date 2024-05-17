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
} from "react-native";

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
import { useState, useEffect } from "react";
import { StylesConteudo } from "../styles/StylesConteudo";

//
const { height: DEVICE_HEIGHT } = Dimensions.get("window");

export default function NewYork() {
  const [vis, setVis] = useState(false);
  const [heightValue] = useState(new Animated.Value(0));

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
            onPress={() => alert("MAPS")}
          >
            <Fontisto name="world" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={StylesConteudo.header}>
          <View style={StylesConteudo.leftHeader}>
            <Text style={StylesConteudo.TxtNomecidade}>the {"\n"}New York</Text>
            <Text style={StylesConteudo.TxtIntroduçaocidade}>
              New York a cidade mais populosa dos Estados Unidos, com vários
              pontos turísticos recebe milhares de turistas e conhecida por sua
              rotina agitada
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
              source={require("../assets/images/estatua2.png")}
              style={StylesConteudo.ImgIntroduçao}
            />
          </View>
        </View>
      </View>
      <View style={StylesConteudo.Carossel}>
        <Text style={StylesConteudo.TxtNomecidade}>Pictures:</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={StylesConteudo.BodyScroll}>
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/ny.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny2.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/newYork.jpg")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/ny3.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/ny5.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/ny6.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/ny4.png")}
            />
            <Image
              style={StylesConteudo.ImgCarossel}
              source={require("../assets/images/ny8.png")}
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
            source={require("../assets/images/newYorkBackground2.jpg")}
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
                    Estátua da liberdade{"\n"}New York, Estados Unidos
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
                    <Text style={StylesConteudo.TxtLocalizaçao}>22ºC</Text>
                  </View>
                  <View style={StylesConteudo.AlgInformaçao2}>
                    <Fontisto name="date" size={24} color="#ffffff" />
                    <Text style={StylesConteudo.TxtLocalizaçao}>7 days</Text>
                  </View>
                </View>
                <View style={StylesConteudo.TxtIntroduçaocidade}>
                  <Text style={{ color: "#FFFFFF" }}>Descrição</Text>
                  <Text style={{ color: "#FFFFFF" }}>
                    A Estátua da Liberdade foi um presente da França para os
                    Estados Unidos como uma forma de celebrar o centenário da
                    independência desse país em relação à Inglaterra. A Estátua
                    da Liberdade representa a deusa romana da liberdade
                    Libertas. Na mão direita, a deusa segura a Declaração da
                    Independência dos Estados Unidos.
                  </Text>
                  <TouchableOpacity style={StylesConteudo.BtnPressme}>
                    <Text style={{ color: "#326e6c88" }}>Press me!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>
      </Modal>
    </View>
  );
}