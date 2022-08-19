import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB3WJdaH9nhRKzLQsJNezCjiQ52W5CocZQ",
  authDomain: "vue-firebase-auth-486c2.firebaseapp.com",
  projectId: "vue-firebase-auth-486c2",
  storageBucket: "vue-firebase-auth-486c2.appspot.com",
  messagingSenderId: "106922108087",
  appId: "1:106922108087:web:a0a25cb3fb3a253511d932"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }