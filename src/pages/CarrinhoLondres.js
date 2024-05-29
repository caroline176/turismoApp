import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "../styles/Styles";
import Londres from "../places/Londres";
import { FontAwesome } from "@expo/vector-icons";
// Import useNavigation
import { useNavigation } from "@react-navigation/native";

const data = [
  // Links das imagens ultilizadas no carousel e nas telas de informações
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
      </View>

      <View style={styles.bodylondres}>
        <TouchableOpacity>
          <Image
            style={styles.imagelondreshotel}
            source={require("../assets/images/hotellondres.jpg")}
          />
          <Text style={styles.titulohotellondres}>
            The Rubens At The Palace
          </Text>
          <Image
            style={styles.avaliaçãohotel}
            source={require("../assets/images/avaliaçãohotel.png")}
          />
          <Text style={styles.descriçãohotel}>Londres, 1,5km até Centro</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            height: "10%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
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
        <TouchableOpacity style={styles.btnagendar}>
          <Text style={styles.txtagendar}>Agendar</Text>
        </TouchableOpacity>
        <View style={styles.metodopagamento}>
          <Text style={styles.txtmetodo}>Método de Pagamento</Text>
        </View>
        <View style={styles.footer2}></View>
      </ScrollView>
      {/* <View style={styles.footerreserva}></View> */}
    </View>
  );
}
