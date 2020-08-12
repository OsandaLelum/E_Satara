import React from "react";
import { View, Text, Button, Platform, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles/styles";

Feed = () => {
  const navigation = useNavigation();
  const route = useRoute();

  let detailResult = route.params;
  return (
    <View style={styles.center}>
      <Text>osanda lelum</Text>
      <Text>17000955</Text>
      <Text style={styles.titleMedium}>
        {detailResult
          ? detailResult.data
          : "Improve Your Knowledge Through E satara"}
      </Text>
      {Platform.select({
        ios: (
          <Button
            title="Go to Questions"
            onPress={() =>
              navigation.navigate("Detail", {
                screenName: "This is a Q&A section",
              })
            }
          />
        ),
        android: (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", {
                screenName: "This is a Q&A section",
              })
            }
          >
            <Text style={styles.androidButtonText}>Go to Questions</Text>
          </TouchableOpacity>
        ),
      })}
    </View>
  );
};

export default Feed;
