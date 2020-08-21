import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HelloFromTheOtherSide from 'react-native-hello-from-the-other-side';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [greeting, setGreeting] = React.useState('');

  React.useEffect(() => {
    HelloFromTheOtherSide.multiply(3, 7).then(setResult);
    HelloFromTheOtherSide.greet('Justin').then(setGreeting);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Greeting: {greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
