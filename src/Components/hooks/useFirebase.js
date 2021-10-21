import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
    }




    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
      }
    
      const handleEmailChange = e =>{
        setEmail(e.target.value);
      }
      const handlePasswordChange = e =>{
        setPassword(e.target.value);
      }
    
      const handleRegistration = e =>{
          e.preventDefault();
          console.log(email, password);
          if(password.length < 6){
            setError('Password must be at least 6 characters long.')
            return;
          }
    
          isLogin? processLogin(email, password): registerNewUser(email, password);
    
         
      }
    
      const processLogin = (email, password)=>{
          signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
          })
          .catch(error => {
            setError(error.message)
          })
      }
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }







    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user=>{
            if(user) {
                console.log('inside user change', user);
                setUser(user);
            }
        })
    }, [])

    return{
        user,
        error,
        signInUsingGoogle,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        isLogin,
        logout
    }

}

export default useFirebase ;