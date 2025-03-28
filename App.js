import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    // <View style={styles.container}>
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
      <Home />
      </SafeAreaView>
    </GestureHandlerRootView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
