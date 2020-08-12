import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/styles.js";
import { Video } from "expo-av";

Tab7 = () => (
  <View style={styles.titleMedium}>
    <Text style={styles.titleVideos}>Welcome to Maths lessons</Text>
    <Video
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={{ width: 300, height: 300 }}
    />
  </View>
);

export default Tab7;
