// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Modal, TouchableOpacity ,ImageBackground} from "react-native";
// import {
//   query,
//   collection,
//   onSnapshot,
//   db,
//   orderBy,
//   doc,
//   updateDoc,
// } from "../config/firebase.js";

// function CustomButton({ title, onPress, style }) {
//   return (
//     <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
//       <Text style={styles.buttonText}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

// function Driver() {
//   const [currentRide, setCurrentRide] = useState();
//   const [isRequestAccepted, setIsRequestAccepted] = useState(false);
//   const [isRequestRejected, setIsRequestRejected] = useState(false);

//   useEffect(() => {
//     listenToRides();
//   }, []);

//   const listenToRides = () => {
//     const q = query(collection(db, "rides"), orderBy("timestamp"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const rides = [];
//       querySnapshot.forEach((doc) => {
//         rides.push({ id: doc.id, ...doc.data() });
//       });
//       console.log("current rides", rides);
//       if (rides.length > 0) {
//         setCurrentRide(rides[rides.length - 1]);
//       }
//     });
//     return unsubscribe;
//   };

//   const acceptRequest = async () => {
//     try {
//       const rideRef = doc(db, "rides", currentRide.id);
//       await updateDoc(rideRef, {
//         status: "accepted",
//       });
//       setIsRequestAccepted(true);
//     } catch (error) {
//       console.error("Error accepting request:", error);
//     }
//   };

//   const rejectRequest = async () => {
//     try {
//       const rideRef = doc(db, "rides", currentRide.id);
//       await updateDoc(rideRef, {
//         status: "rejected",
//       });
//       setIsRequestAccepted(false);
//       setIsRequestRejected(true);
//     } catch (error) {
//       console.error("Error rejecting request:", error);
//     }
//   };

//   return (
//     <ImageBackground
//       source={require("./Images/taxi-service-online-on-smartphone.jpg")}
//       style={styles.backgroundImage}>
//       <View style={styles.container}>
//         {currentRide && (
//           <View style={styles.rides}>
//             {/* Render ride details if currentRide is available */}
//             <Text style={styles.text}>
//               Pickup: {currentRide.pickup.name}
//             </Text>
//             <Text style={styles.text}>
//               Destination: {currentRide.destination.name}
//             </Text>
//             <Text style={styles.text}>Car Type: {currentRide.carType}</Text>
//             <Text style={styles.text}>Fare: {currentRide.fare.toFixed(2)}</Text>
//             <View style={styles.buttonContainer}>
//               <CustomButton title="Reject " onPress={rejectRequest} />
//               <CustomButton title="Accept " onPress={acceptRequest} />
//             </View>
//           </View>
//         )}
//         {/* Popup to inform the user that their request has been accepted */}
//         <Modal
//           visible={isRequestAccepted}
//           animationType="slide"
//           transparent={true}
//           onRequestClose={() => setIsRequestAccepted(false)}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>Request Accepted!</Text>
//             <CustomButton
//               title="Close"
//               onPress={() => setIsRequestAccepted(false)}
//             />
//           </View>
//         </Modal>
//         <Modal
//           visible={isRequestRejected}
//           animationType="slide"
//           transparent={true}
//           onRequestClose={() => setIsRequestRejected(false)}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>Request Rejected!</Text>
//             <CustomButton
//               title="Close"
//               onPress={() => setIsRequestRejected(false)}
//             />
//           </View>
//         </Modal>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
    
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
    
//   },
//   rides: {
//     color: "black",
//     margin: 10,
//     padding: 50,
//   },
//   text: {
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     fontSize: 23,
//     padding: 16,
//     marginBottom: 5,
//     borderRadius:30,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: "#007AFF",
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 12,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 20,
//     // textAlign: "left",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#fff",
//   },
// });

// export default Driver;
