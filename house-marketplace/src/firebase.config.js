import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDeVDRjtjVuFoxj1xFPXTvzheLSAPNYvM",
  authDomain: "house-marketplace-app-15bed.firebaseapp.com",
  projectId: "house-marketplace-app-15bed",
  storageBucket: "house-marketplace-app-15bed.appspot.com",
  messagingSenderId: "343413274702",
  appId: "1:343413274702:web:b77562303227858f9bab1f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
