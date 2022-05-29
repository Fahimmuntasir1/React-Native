import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View>

      <Text style={styles.bigBlue}>Country : {country.name.common}</Text>
      
      <Image
        source={{
          uri: country.flags.png,
        }}
        style={{ width: 350, height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 22,
    backgroundColor: "black",
    padding: 10,
  },
});
