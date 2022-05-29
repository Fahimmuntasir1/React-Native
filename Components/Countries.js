import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearched(data);
        setCountries(data);
      });
  }, []);
  const handleChangeText = (text) => {
    const filtered = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearched(filtered);
  };
  return (
    <View>
      <Text>Countries: {searched.length}</Text>
      <Text style={styles.baseText}>Search a Country</Text>
      <TextInput
        onChangeText={handleChangeText}
        style={styles.input}
      ></TextInput>
      <ScrollView>
        {searched.map((country) => (
          <Country country={country}></Country>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    margin: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
