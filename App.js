import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TweetContent from './TweetContent'; // Assuming you have stored the TweetContent component in TweetContent.js
import { tweets } from './tweets'; // Importing tweet data from tweets.js

const Tab = createBottomTabNavigator();

const TweetScreen = () => {
  const renderTweet = ({ item }) => <TweetContent tweet={item} />;
  const renderSeparator = () => <View style={{ height: 8 }} />; // Adjust the height as needed

  return (
    <FlatList
      data={tweets}
      renderItem={renderTweet}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Text style={{ fontSize: 28, fontWeight: 'bold', backgroundColor: 'pink' }}>Activity: 5 Francis Maga </Text>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={TweetScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
