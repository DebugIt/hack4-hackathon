import React, {useEffect, useState} from 'react'
import { storage, useAuth } from './firebase';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
const Wordrobe = (props) => {


    // creating a state for img ist
  const [imgList, setImgList] = useState([])
  const imgListRef = ref(storage, 'images/'); // this here is a reference created and will be passed inside the listAll
    // 6 - getting images to the page
  
  useEffect(() => {
    // telling firebase to get all the images in a pattern
    listAll(imgListRef).then((response) => {
      // we need to go through each item to get its url
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {

          // this gets the previous data and url img and sets it to page
          setImgList((prev) => [...prev, url]); 
        })
      })
    }); // this returns all the images and packages from folder
  }, [])

  // privatize any page
  const navigate = useNavigate();
  const currenUser = useAuth();

  if(!currenUser){
      navigate("/")
  }

  const naviateProj = () => {
      return navigate("/projects")
  }


  return (
    <div>
        <h1 className='text-center font-mono font-bold text-emerald-900 py-2'>Your Wardrobe for the week!</h1>


        {imgList.map((url) => {
             return (
                <>
                    <div className='grid grid-cols-2'>
                        <div className=''>
                            <img className='px-3 py-2 h-80' src={url} />
                        </div>
                    </div>
                </>
             )
    })}
    


    <p className='font-mono font-extrabold px-4 py-3' >"Elevate your elegance with a touch of sophistication from our formal wardrobe collection."</p>
    </div>
  )
}

export default Wordrobe