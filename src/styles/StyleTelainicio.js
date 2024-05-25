import { StyleSheet } from "react-native";

export const StylesTelaInicio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  header: {
    height: 90,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  footer: {
    height: 65,
  },

  viewButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },

  imgbackground: {
    width: "100%",
    height: "100%",
  },

  sombratelainicio: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000066",
    justifyContent: "center",
    borderRadius: 50,
    justifyContent: "center",
  },

  algtelainicio: {
    flex: 1,
    justifyContent: "center",
  },

  txtTitulo: {
    fontFamily: "CormorantGaramond-Light",
    marginLeft: 50,
    marginTop: 5,
    color: "#FFFFFF",
    fontSize: 40,
    letterSpacing: 1.5,
    marginTop: -10,
  },

  txtIntroduçao: {
    fontFamily: "CormorantGaramond-Light",
    color: "#FFFFFF",
    fontSize: 35,
    marginLeft: 50,
    marginTop: -15,
  },

  algtelainicio2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btninicio: {
    width: 70,
    height: 50,
    backgroundColor: "#326e6c",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: -80,
    marginLeft: 222,
    zIndex: 3,
    shadowColor: "#bb98af",
  },

  txtconteudo: {
    fontFamily: "CormorantGaramond-Light",
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 20,
  },
});
