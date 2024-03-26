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
// import { register } from "../config/firebase";

// const SignUp = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [fullname, setFullName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const signup = () => {
//     register({ email, password, confirmPassword, fullname });
//   };

//   return (
//     <ImageBackground
//       source={require("./Images/bg-mobile.jpg")}
//       style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           placeholderTextColor="black"
//           autoCapitalize="words"
//           value={fullname}
//           onChangeText={setFullName}
//         />

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
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           placeholderTextColor="black"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />
//         <TouchableHighlight
//           style={styles.button}
//           underlayColor="#3282b8"
//           onPress={signup}>
//           <Text style={styles.buttonText}>Signup</Text>
//         </TouchableHighlight>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.text}
//             onPress={() => navigation.navigate("Login")}>
//             <Text style={styles.text}>Already have an account </Text>
//           </TouchableOpacity>
//         </View>
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
//     fontWeight: "bold",
//     textAlign: "center",
//     fontSize: 22,
//   },
// });

// export default SignUp;


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { driverSignup } from "../config/firebase";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigator = navigation.navigate;

  const signUp = async () => {
    if (!name || !userType || !email || !password || !confirmPassword) {
      return alert("Fill all Please");
    } else if (password != confirmPassword) {
      return alert("Password dosn't match");
    } else {
      await driverSignup({ name, userType, email, password }, navigator);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Driver/Passenger"
        onChangeText={(text) => setUserType(text)}
        value={userType}
        autoCapitalize="none"
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.signupButton} onPress={signUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginText}
        onPress={() => navigator("Login")}>
        <Text>Already have an account Click here...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signupButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 20,
  },
});

export default SignUp;