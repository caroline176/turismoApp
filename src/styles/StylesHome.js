import { StyleSheet } from "react-native";

export const StylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  Carosel: {
    height: 370,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30, // Define o espaço acima do elemneto
    shadowColor: "#326e6c", // Define a cor da sombra
    shadowOpacity: 0.58, // Define a opacidade da sombra
    shadowRadius: 16.0, // Define o raio de desfocagem da sombra
    elevation: 24, // Adiciona uma sombra projetada ao item
    borderRadius: 30, // Deixa a borda arredondada
    backgroundColor: "white", // Define a cor de fundo
    overflow: "hidden", // Especifica quando o conteúdo de um elemento de nível de bloco deve ser cortado
  },
  imgcarosel: {
    height: 400, // Define a altura do carousel
    width: "100%", // Define a largura do carousel
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30, // Indica o espaço acima do elemento
  },
  imgcarosel2: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    alignItems: "flex-end",
  },
  btnicone: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Faz com que as visualizações sejam cortadas
    marginTop: 5, // Define o espaço acima do botão
    marginRight: 10,
  },
  imgicone: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  txtexplore: {
    fontFamily: "PoetsenOne-Regular",
    fontSize: 30, // Define o tamanho da fonte ultilizada
    marginLeft: 20, // Define o espaço entre a borda esquerda de um elemento e seu entorno
  },
  btnsights: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtlocais: {
    fontFamily: "CormorantGaramond-Light",
    color: "#326e6c",
    fontSize: 18,
  },
  bolinhalocais: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#326e6c",
  },
  txttours: {
    fontFamily: "CormorantGaramond-Light",
    color: "black",
    fontSize: 18,
  },
  bolinhatours: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 5,
  },
  bolinhaadventures: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 5,
  },
  alturabtnscidades: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  txtpopular: {
    marginLeft: 20,
    fontSize: 30,
    fontFamily: "PoetsenOne-Regular",
    top: -50,
  },
  alinhamentobtncidades: {
    width: "100%",
    height: 700,
    justifyContent: "center",
    alignItems: "center",
  },
  botoescidades: {
    width: "90%",
    height: 100,
    marginBottom: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "#326e6c",
    shadowOpacity: 0.59171875,
    shadowRadius: 8,
    elevation: 12,
    borderRadius: 20,
  },
  imgbtncidades: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgbtncidades2: {
    height: "80%",
    width: "80%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  designtxtcidades: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nomecidade: {
    fontFamily: "PoetsenOne-Regular",
  },
  descricaocidades: {
    fontFamily: "CormorantGaramond-Light",
  },
  finaldapagina: {
    height: 60,
  },
});
