/* eslint-disable  consistent-return  */
import { Constants, Permissions, Notifications } from 'expo';
import * as firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';


export default (async function registerForPushNotificationsAsync() {
  let userUID = null;
  // firebase init
  await firebase.initializeApp(firebaseConfig);
  // firebase signInAnonymously
  await firebase.auth().signInAnonymously().catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      const { uid } = user;
      userUID = uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out.
      console.log('User is signed out');
      // ...
    }
    // ...
  });

  // Remote notifications do not work in simulators, only on device
  if (!Constants.isDevice) {
    return;
  }

  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  const token = await Notifications.getExpoPushTokenAsync();
  // console.log('token >>>>>>>>>>>');
  // console.log(token);

  // clear warning
  // https://github.com/facebook/react-native/issues/12981
  console.ignoredYellowBox = ['Setting a timer'];
  firebase.database().ref(`users/${userUID}`).set({
    notification: token,
  });

  return true;
});
