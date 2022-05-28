import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-web";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text>Countries: {countries.length}</Text>
      <ScrollView>
          {
              countries.map(country => <Country country={country}></Country>)
          }
      </ScrollView>
    </View>
  );
}
