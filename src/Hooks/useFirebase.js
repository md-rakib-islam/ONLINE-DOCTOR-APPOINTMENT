import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../components/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRagistration = (e) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });

    e.preventDefault();
  };

  return {
    user,

    signInUsingGoogle,
    logOut,
    handleEmailChange,
    handlePasswordChange,
    handleRagistration,
  };
};

export default useFirebase;
