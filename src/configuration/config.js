import app from "../Firebase/firebase"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore"
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

class ConfigServices{
    database;
    storage;

    constructor(){
        this.database = getFirestore(app)
        this.storage = getStorage(app)
    }

    // Create Post 
    async creatPost({title, content, featuredImage, status, url, userId}){
        try {
           const docRef = await addDoc(collection(this.database, "posts"), {
                title: title,
                des: content,
                image: featuredImage,
                status: status,
                url: url,
                useid: userId
            })
            // return docRef.id
            return docRef
        } catch (error) {
            console.log("Firebase Service: createPost error ", error);
            
        }
    }

    // update an existing post 
    async updatePost(postId, upDatedData){
        try {
            const postRef = doc(this.database, "posts", postId)
            return await updateDoc(postRef, upDatedData)
            // return await updateDoc(postRef, {
            //     title: updatedTitle,
            //     des: updatedContent,
            //     image: updatedFeaturedImage,
            //     status: updatedStatus,
            //     url: updatedUrl
            // })

        } catch (error) {
            console.log("Firebase Service: updatePost error ", error);
        }
    }

    // Delete Post 
    async deletePost(postId){
        try {
            const postRef = doc(this.database, "posts", postId)
            await deleteDoc(postRef)
            return true
        } catch (error) {
            console.log("Firebase Service: deletePost error ", error);
            return false
        }
    }

    // Get single post 
    async getPost(postId){
        try {
            const postRef = doc(this.database, "posts", postId)
            const postDetails = await getDoc(postRef)
            if (postDetails.exists()) {
                return postDetails.data()
            }else{
                console.log("Post details not Found");
                
            }
        } catch (error) {
            console.log("Firebase Service: getPost error ", error);
            return false
        }
    }

    // Get all posts 
    async getPosts(){
        try {
            const q = query(collection(this.database, "posts"), where("status", "==", true))
            const querySnapShot = getDocs(q)
            // console.log(querySnapShot);
            return querySnapShot.forEach( (doc) => ( {id: doc.id, ...doc.data()} ))
        } catch (error) {
            console.log("Firebase Service: getPosts error ", error);
            
        }
    }

    // Upload files to firebase storage.
    async uploadFile(file, imagePath){
        try {
            const storageRef = ref(this.storage, imagePath)
            return await uploadBytes(storageRef, file)
        } catch (error) {
            console.log("Firebase Service: uploadFile error ", error);
            
        }
    }

    // delete file 
    async deleteFile(imagePath){
        try {
            const fileRef = ref(this.storage, imagePath)
            await deleteObject(fileRef,)
        } catch (error) {
            console.log("Firebase Service: deleteFile error ", error);
        }
    }

    // file preview 
    async filePreview(imagePath){
        try {
            const fileRef = ref(this.storage, imagePath)
            return await getDownloadURL(fileRef)
        } catch (error) {
            console.log("Firebase Service: File Preview error ", error);
            
        }
    }

}

const configServices = new ConfigServices()
export default configServices;