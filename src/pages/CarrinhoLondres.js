import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { styles } from "../styles/Styles";
import Londres from "../places/Londres";
import { FontAwesome } from "@expo/vector-icons";
// Import useNavigation
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    imgUrl: require("../assets/images/hotellondres.jpg"),
  },
  {
    imgUrl: require("../assets/images/hotellondres2.jpg"),
  },
  {
    imgUrl: require("../assets/images/avaliaçãohotel.png"),
  },
];

export default function CarrinhoLondres() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { padding: 10 }]}>
      <View style={styles.tituloheader}>
        <TouchableOpacity
          style={styles.btnVoltarlondres}
          onPress={() => navigation.navigate("Londres")}
        >
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.txttituloheader}> Faça sua reserva!</Text>
        <View style={{ height: "100%", width: "20%" }}></View>
      </View>
      <ScrollView>
        <View style={{ height: "10%", width: "100%" }}></View>
        <View style={styles.bodylondres}>
          <TouchableOpacity>
            <View style={{ height: "15%", width: "100%" }}></View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: "90%",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <Image
                  style={styles.imagelondreshotel}
                  source={require("../assets/images/hotellondres.jpg")}
                />
              </View>
              <View style={{ height: "15%", width: "100%" }}>
                <Text style={styles.titulohotellondres}>
                  The Rubens At The Palace
                </Text>
                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={styles.avaliaçãohotel}
                    source={require("../assets/images/avaliaçãohotel.png")}
                  />
                  <Text style={styles.descriçãohotel}>
                    Londres, 1,5km até Centro
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: "10%",
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: 15,
          }}
        >
          <TextInput
            style={styles.txtcaixadetexto}
            placeholder="Data de entrada"
          />
          <TextInput
            style={styles.txtcaixadetexto}
            placeholder="Data de saida"
          />
        </View>
        <View
          style={{
            margin: 15,
            height: "10%",
            width: "90%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.btnagendar}>
            <Text style={styles.txtagendar}>Agendar</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.metodopagamento, {}]}>
          <Text style={styles.txtmetodo}>Métodos de Pagamento</Text>

          <View
            style={{
              height: "60%",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <ScrollView horizontal={true}>
              <TouchableOpacity
                style={{
                  height: "90%",
                  width: 150,
                  borderWidth: 2,
                  margin: 5,
                  borderColor: "#C0C0C0",
                  borderRadius: 10,
                }}
              >
                <View>
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../assets/icons/mastercard.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: "90%",
                  width: 150,
                  borderWidth: 2,
                  margin: 5,
                  borderColor: "#C0C0C0",
                  borderRadius: 10,
                }}
              >
                <View>
                  <Image
                    style={{ height: "100%", width: "100%", padding: 5 }}
                    source={require("../assets/icons/picpay.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: "90%",
                  width: 150,
                  borderWidth: 2,
                  margin: 5,
                  borderColor: "#C0C0C0",
                  borderRadius: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    source={require("../assets/icons/visa.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: "90%",
                  width: 150,
                  borderWidth: 2,
                  margin: 5,
                  borderColor: "#C0C0C0",
                  borderRadius: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    source={require("../assets/icons/Boleto.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: "90%",
                  width: 150,
                  borderWidth: 2,
                  margin: 5,
                  borderColor: "#C0C0C0",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      height: "50%",
                      width: "100%",
                    }}
                    source={require("../assets/icons/elo.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: "90%",
                  width: 130,
                  margin: 5,
                  borderRadius: 100,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: 160,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      height: "80%",
                      width: "55%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    source={require("../assets/icons/mais2.png")}
                  />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer2}>
        <View style={{ height: "30%" }}>
          <Text style={styles.txtfooter2}>Valor Total</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={styles.txtfooter}>R$720</Text>
          <View style={{ height: 40, width: "30%" }}></View>
          <TouchableOpacity style={styles.botãoconfirm}>
            <Text style={styles.confirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.footerreserva}></View> */}
    </View>
  );
}
