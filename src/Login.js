// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   TouchableHighlight,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
// } from "react-native";
// import { login } from "../config/firebase";

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = async () => {
//     const success = await login({ email, password });
//     if (success) {
//       alert("Successfully logged");
//       navigation.navigate("Dashboard_drawer"); // Navigate to the dashboard screen
//     }
//   };

//   return (
//     <ImageBackground
//       source={require("./Images/bg-image.jpg")}
//       style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="black"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="black"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableHighlight
//           style={styles.button}
//           underlayColor="#3282b8"
//           onPress={signIn}>
//           <Text style={styles.buttonText}>Log_in</Text>
//         </TouchableHighlight>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     height: 45,
//     width: 300,
//     marginVertical: 10,
//     paddingHorizontal: 10,
//     borderColor: "black",
//     borderWidth: 1,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//   },
//   button: {
//     width: 150,
//     backgroundColor: "black",
//     borderRadius: 5,
//     marginTop: 10,
//     paddingVertical: 10,
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonContainer: {
//     alignItems: "center",
//     marginTop: 10,
//   },
//   text: {
//     color: "#fff",
//     textAlign: "center",
//     fontSize: 16,
//   },
// });

// export default Login;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { driverLogin } from "../config/firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = navigation.navigate;

  const login = async () => {
    if (!email || !password) {
      return alert("fill All");
    } else {
      await driverLogin({ email, password }, navigator);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigator("SignUp")}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafd",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  form: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: "#007bff",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    marginRight: 5,
  },
  signupButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#007bff",
  },
  signupButtonText: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default Login;