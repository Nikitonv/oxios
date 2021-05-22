import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Image style={styles.logo} source={require("./src/intro.png")} />
      </TouchableOpacity>
    </View>
  );
}

function Login() {
  return (
    <View style={styles.containerlogin}>
      <Image style={styles.loginlogo} source={require("./src/intro.png")} />
      <Text style={styles.inside}>Log in</Text>
      <Inputs />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tosignup}>Don't have an account? </Text>
        <Text style={styles.tosignup2}>Sing Up</Text>
      </View>
    </View>
  );
}

class Inputs extends Component {
  state = {
    Email: "",
    Password: "",
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };
  render() {
    return (
      <View style={styles.contmail}>
        <View style={styles.SectionStyle}>
          <Image style={{ margin: 7 }} source={require("./src/mail.png")} />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#878787"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Image style={{ margin: 7 }} source={require("./src/lock.png")} />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#878787"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
        </View>
        <Text style={{ marginLeft: 200, margin: 5 }}>Forgot password?</Text>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Inputs;

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 104,
    height: 120,
  },
  containerlogin: {
    flex: 1,
    backgroundColor: "#fbfbfd",
    alignItems: "center",
  },
  loginlogo: {
    width: 54,
    height: 62,
    top: 89,
  },
  contmail: {
    paddingTop: 160,
  },
  inside: {
    marginLeft: 0,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 22,
    top: 179,
    position: "absolute",
  },
  tosignup: {
    padding: 95,
    color: "#9c9b9c",
    fontSize: 17,
  },
  tosignup2: {
    marginLeft: -190,
    padding: 95,
    fontWeight: "bold",
    fontSize: 17,
  },
  input: {
    margin: 10,
    height: 57,
    width: 335,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  containerButton: {
    padding: 10,
    backgroundColor: "#fbfbfd",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: "#f47958",
    height: 60,
    width: 205,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "white",
  },
  SectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 57,
    width: 335,
    borderRadius: 10,
    margin: 10,
  },
  ImageStyle: {
    padding: 15,
    margin: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
