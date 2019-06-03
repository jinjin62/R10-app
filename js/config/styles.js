import { Platform } from "react-native";

export const Font = {
  light: "Montserrat-Light",

  ...Platform.select({
    ios: { mont: "Montserrat" },
    android: { mont: "Montserrat-Regular" }
  })
};
