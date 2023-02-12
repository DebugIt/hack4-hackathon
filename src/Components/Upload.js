// import './App.css';
import React, {useState, useEffect} from 'react';
import {storage, useAuth} from "./firebase" // 3

// now to make reference that where in our storage the file is to be uploaded
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"  // this here ref is used to give a reference 
// that were the image should be stored - 3.1
// import {useAuth} from "./firebase"
import {v4} from "uuid" // 4
import {Link, useNavigate} from 'react-router-dom'
import Wordrobe from './Wordrobe';


// step - 2
// creating inputs and buttons in our app - 1
// writing a function to handle upload event - 2
// importing the storage variable - 3
// importing uuid - 4
// import uploadBytes for image upload - 5
// loading up all images on the page - 6
// using useEffect
// importing list all
// importing getDownloadURL

function App() {

  // 2

  // creating a state to update the img upload and set the state
  // setting initial state to null
  const [imgUpload, setImgUpload] = useState(null);
  
  // creating a state for img ist
  const [imgList, setImgList] = useState([])
  const imgListRef = ref(storage, 'images/'); // this here is a reference created and will be passed inside the listAll

  const uploadImg = () => {
    // creating a condition if the file is uploaded or not
    if(imgUpload == null) return;
    // this 'images' is the folder name were all the images will be stored in storage
    // using dollar sign so we can have every image with a different id
    const imgRef = ref(storage, `images/${imgUpload + v4()}`); // 3.2

    // uploading image to firebase - 5
    uploadBytes(imgRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // alert("image uploaded");
        setImgList((prev) => [...prev, url])

      })
    })
  }

  

    // privatize any page
    const navigate = useNavigate();
    const currenUser = useAuth();

    if(!currenUser){
        navigate("/")
    }

    const naviateProj = () => {
        return navigate("/projects")
    }


    // const prop = () => {
        
    

  return (
    <div className="App text-center">

        <p className='text-center text-2xl font-mono font-bold text-emerald-900 py-5'>Share your outfits in this space!</p>

       
      {/* 1 */}
      {/* here the .target.files is set to [0] because we only need 1 file in within the files array */}
      <input className='border  border-emerald-800 py-1 px-3 mr-2 rounded-2xl '  type="file" onChange={e => setImgUpload(e.target.files[0])} />
      <button className='border border-emerald-900 py-2 px-3 rounded-2xl ' onClick={uploadImg}>Upload img</button>
       <br/>       
       <br/>       
       <br/>       

        <button className='border border-slate-900 bg-[#121212] text-white py-2 px-3 rounded-xl' onClick={() => navigate('/wordrobe')}>Move to Wardrobe!</button>
        <br />
        <br />
      {/* passing url as source */}
      <Wordrobe imgList={imgList.map((url) => {
        return <img src={url} />
      })}/>
    </div>
  );
}

export default App;

