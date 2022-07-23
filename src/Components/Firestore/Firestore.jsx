import firebase from 'firebase';
const config = {
   apiKey: "AIzfhrwkKhDBFHbntnKhTahHjkNK6FG875dSB6y",
   databaseURL: "https://rocketflightdates-default-rtdb.firebaseio.com",
   projectId: "rocketflightdates",
  
};
firebase.initializeApp(config);
export default firebase;