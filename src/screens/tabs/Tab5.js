import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Platform, StyleSheet, Text, View } from "react-native";
import { CardList } from "react-native-card-list";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Tab5 = () => (
  <Card>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default Tab5;
