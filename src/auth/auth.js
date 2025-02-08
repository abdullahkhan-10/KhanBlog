import app from "../Firebase/firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

class AuthService  {
    auth;

    constructor(){
        this.auth = getAuth(app)
    }

    // CreateAccount
    async creatAccount( {name, email, password}){
        try {
            const userAccount = await createUserWithEmailAndPassword(this.auth, name, email, password)
            if (userAccount) {
                // login method
                return this.Login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Login
    async Login({email, password}){
        try {
            const userDetails = await signInWithEmailAndPassword(this.auth, email, password)
            return userDetails.user
        } catch (error) {
            console.log(error.message);
            
        }
    }

    // Logout 
    async LogOut(){
        try {
            await signOut(this.auth)
        } catch (error) {
            console.log("Firebase Service: Logout error: ", error);
            
        }
    }

    // Current user
    async getCurrentUser(){
        try {
            return await this.auth.currentUser;
        } catch (error) {
            console.log("Firebase Service: getCurrentUser error: ", error);            
        }
    }
}

const authService = new AuthService();
export default authService;