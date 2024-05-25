import { StyleSheet } from "react-native";

export const StylesPasseios = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
  },

  header: {
    height: "10%", // Define a altura do HEADER
    backgroundColor: "#54b53f", // Define a cor de fundo
    justifyContent: "center",
  },

  img: {
    width: 300,
    height: 300,
    margin: 30,
    marginBottom: 5,
    borderRadius: 10,
  },
  body: {
    flex: 1,
  },

  txtImg: {
    fontFamily: "PoetsenOne-Regular",
    fontSize: 20, // Define o tamanho da fonte
  },
  txtHeader: {
    fontSize: 28, // Define o tamanho da fonte

    fontFamily: "PoetsenOne-Regular",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#54b53f",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 1,
    height: 40,
    width: 150,
    borderRadius: 10,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100", // Define a altura do componente Footer
    backgroundColor: "#54b53f", // Define a cor de fundo
  },
  slogan: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },

  imgsconteudo: {
    width: 300,
    height: 300,
    margin: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  algconteudo: {
    alignItems: "center",
    justifyContent: "center",
  },
  tituloiporanga: {
    alignItems: "center",
    backgroundColor: "#54b53f",
    fontFamily: "PoetsenOne-Regular",
  },
  txt_titulocidade: {
    fontSize: 25,
    margin: 10,
  },
  txtconteudo: {
    margin: 15,
    textAlign: "justify",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontFamily: "CormorantGaramond-Light",
    textAlign: "center",
    fontSize: 16,
  },
  txt_introduçaocidade: {
    textAlign: "center",
    fontSize: 18,
    margin: 5,
    borderBottomWidth: "black",
    borderBottomWidth: 1,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#edf0ee",
  },
  txttitulopasseio: {
    fontSize: 22,
    fontFamily: "PoetsenOne-Regular",
    textAlign: "center",
  },
  caixa: {
    backgroundColor: "white",
    width: 380,
    height: 550,
    borderRadius: "20",
    margin: 25,
    shadowColor: "#326e6c",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
