import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Carousel from 'react-bootstrap/Carousel';


const B4sign = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
        <div className='' id='container'>
            <div className='flex text-center m-auto w-[50%]'>
                <div className=' w-full bg-[#9ad8e4] mr-2 rounded-xl'>
                    <p className='text-5xl font-bold px-2 py-16' ><span className='text-emerald-500'>Dress</span> to Impress,<span className='text-[#5d862e]'> Virtually</span></p>
                </div>
                <div id="sub" className=''>
                    <div className='bg-[#ff7913] rounded-xl'>
                        <p  className='text-lg font-bold px-1 py-8'>The <span className='text-[#ffffff]'>Future</span> of Fashion is <span className='text-[#8338ec]'> Virtual!</span></p>
                    </div>
                    <div className='bg-[#68e7c3] rounded-xl'>
                        <p  className='text-xl font-bold py-14'>The <span className='text-[#0096c7]'>Closet</span> of your  <span className='text-[#ff99c8]'>Dreams.</span> <span className='text-blue-600'>Digitally!</span></p>
                    </div>
                </div>
            </div>

            <br />

            <hr className='border-[#dad7cd]'/>

            <div className='grid grid-cols-2 '>
                <div className='justify-center px-2 py-2'>
                    <img className='rounded-lg' src="pic1.png" alt="" />
                </div>
                <div className='px-5 py-2'>
                    <p className='text-3xl px-8 py-10 font-bold' style={{fontFamily: 'Montserrat, sans-serif'}}>
                        <span 
                        className='bg-clip-text text-transparent bg-gradient-to-r from-[#913175] to-[#F1DBBF] '>Maximize</span> {" "} 
                        your <span className='text-blue-600'>Fashion</span> Choices with a <span className='text-[#8d4BE0]'>Virtual</span> Closet
                    </p>
                </div>
            </div>

            {/*  */}
            <br />

            {/* <div className='grid grid-cols-2 mx-2'>
                <div className=''>
                    <img src="pc1.jpg" alt="" />
                </div>
                <div>
                    <img src="pc2.jpg" alt="" />
                </div>
            </div> */}


{/* carousel */}

  
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="pc1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='font-bold' style={{fontFamily: 'Montserrat, sans-serif'}}>Give yourself a Virtual Look out!</h3>
                <p className='font-mono'>Organise and store all your outfits and, Never worry for being choosy again!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="pc2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className='font-bold' style={{fontFamily: 'Montserrat, sans-serif'}}>Get organized</h3>
                <p className='font-mono'>Only with <span className='bg-black px-3 py-1 rounded-lg'>fashion.Ico</span> your own personal Virtual Wordrobe</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item> */}
            </Carousel>

            <br />

            <div>
                <p className='font-bold text-center px-2 py-3 text-2xl'>Today's Special 🔥</p>
            </div>
            <div className='flex'>
                <div>
                    <img className='rounded-lg '  src="https://source.unsplash.com/900x500/?casual-shirt" alt="" />
                </div>
                <div>
                    <img className='rounded-lg '  src="https://source.unsplash.com/900x500/?casual-shirt" alt="" />
                </div>
            </div>

            

            <br />

            <div className='border border-slate-200 '>
                <div><img src="ward.jpg" alt="" /></div>
                <p className='text-center font-bold text-3xl py-3' style={{fontFamily: 'Montserrat, sans-serif'}} >Organize your Wordrobe Virtually!</p>
            </div>


        </div>
    </>
  )
}

export default B4sign