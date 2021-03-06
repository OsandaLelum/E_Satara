import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Platform, StyleSheet, Text, View } from "react-native";
import { CardList } from "react-native-card-list";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Tab6 = () => (
  <Card>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>Maths Grade 11</Title>
      <Paragraph>This is a...</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default Tab6;
