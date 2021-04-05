import React, { useState } from "react";
import { TextInput } from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const data = [
  {
    id: 1,
    name: "Gideon Ekeke",
    cover: require("../text/assets/gid.jpeg"),
    avatar: require("../text/assets/1.jpg"),
    interest: "Fullstack developer",
  },
  {
    id: 2,
    name: "Olorunda Samuel",
    cover: require("../text/assets/samuel.jpg"),
    avatar: require("../text/assets/2.jpg"),
    interest: "Mobile developer",
  },
  {
    id: 3,
    name: "Samuel Kelechi",
    cover: require("../text/assets/sam.jpg"),
    avatar: require("../text/assets/4.jpg"),
    interest: "Fullstack developer",
  },
  {
    id: 4,
    name: "Gbadamosi",
    cover: require("../text/assets/olablack.png"),
    avatar: require("../text/assets/5.jpg"),
    interest: "Web developer",
  },
  {
    id: 5,
    name: "Osazie",
    cover: require("../text/assets/osasblack.png"),
    avatar: require("../text/assets/9.jpg"),
    interest: "Web developer",
  },
  {
    id: 5,
    name: "Lekan",
    cover: require("../text/assets/c.jpg"),
    avatar: require("../text/assets/6.jpg"),
    interest: "Web developer",
  },
];

function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.trailer}>
          <View style={{ alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{ height: 80, width: 80 }}
              source={require("./assets/c.jpg")}
            />
            <TextInput
              value={name}
              onChangeText={setName}
              style={{ height: 30, backgroundColor: "silver", width: 250 }}
              placeholder="name"
            />
            <View style={{ marginRight: 150 }}>{name}</View>
            <TouchableOpacity
              style={{
                width: 100,
                backgroundColor: "black",
                height: 40,
                marginTop: 5,
                marginRight: 150,
                borderRadius: 5,
                alignItems: "center",
                color: "white",

                justifyContent: "center",
              }}
            >
              Search
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  height: 220,
                  width: 300,
                  backgroundColor: "silver",
                  borderRadius: 5,
                  marginTop: 20,
                  // alignItems: "center",
                }}
              >
                <Image
                  resizeMode="cover"
                  style={{
                    height: 80,
                    width: "100%",
                    borderRadius: 5,
                    filter: "blur(0.5px)",
                  }}
                  source={item.cover}
                />
                <Image
                  resizeMode="cover"
                  style={{
                    height: 50,
                    width: 50,

                    border: "4px solid #00acee",
                    borderRadius: "50px",
                    marginTop: -20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 120,
                  }}
                  source={item.avatar}
                />
                <View
                  style={{
                    flexDirection: "row",
                    // backgroundColor: "red",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}
                  >
                    {" "}
                    {item.name}
                  </Text>
                  <MaterialCommunityIcons
                    name="pen"
                    style={{
                      color: "#00acee",
                      // fontSize: 30,
                    }}
                  />
                  <MaterialCommunityIcons
                    name="message"
                    style={{
                      color: "#00acee",
                      // fontSize: 30,
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      width: 80,
                      backgroundColor: "#00acee",
                      height: 30,
                      // marginTop: 5,

                      borderRadius: 5,
                      alignItems: "center",
                      color: "white",
                      marginRight: 10,
                      justifyContent: "center",
                    }}
                  >
                    follow
                  </TouchableOpacity>
                </View>
                <Text
                  style={{ marginLeft: 15, fontSize: 10, fontWeight: "bold" }}
                >
                  {item.interest}
                </Text>

                <Text style={{ marginLeft: 15, fontSize: 10, width: 270 }}>
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters...
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  trailer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    margin: 10,
    flexWrap: "wrap",
    // backgroundColor: "lightblue",
  },

  trailer1: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    justifyContent: "center",
    // alignItems: "center",
    margin: 20,
  },
});

export default App;
