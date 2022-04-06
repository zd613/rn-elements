import { ThemeProvider, Button } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => {
    alert("press");
  };
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button title="hello owlrd" onPress={handlePress} />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
