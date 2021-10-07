import './App.css';
import { HighImageZoom } from './HighImageZoom';
import { useState, useEffect } from 'react';
import slides from './slide.json';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

// const App = () =>{
//   const [images, setImages] = useState([]);
//   const getImages = async () => {
//     const response = await fetch("https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/info.json")
//     let image = await response.json();
//     setImages(image.groups)
//   };
  
//   useEffect(() => {
//     getImages();
//   }, []);

//   const [selectedImage, setSelectedImage] = useState();
//   const selectImage = (slide) => {
//       setSelectedImage(slide.slide);
//     };

//   return (
//     <div 
//      className="App"
//      style={{
//        display: "flex",
//        justifyContent:'space-between'
//        }}
//     >
//       <div>
//         <h2>Test Images</h2>
//             {images.map((group, index) => {
//               return (
//                 <div 
//                 style={{
//                   display:"flex",
//                   flexDirection:'column'
//                   }}
//                 >
//                   <h3 key={index}>{group.name}</h3>
//                   {group.slides.map((slide, index) => {
//                     return (
//                       <button
//                         key={index}
//                         onClick={() => {
//                           return selectImage(slide);
//                         }}
//                       >
//                         {slide.name}
//                       </button>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//       </div>
//       <div
//         style = {{
//           display: "flex",
//           justifyContent: "center"
//         }}>
//         <HighImageZoom image={ selectedImage }/>
//       </div>
//     </div>
//   );
// }

//---open sea dragon 이미지 한장

// const App = () =>{
//   const [images, setImages] = useState([]);
  
//   const getImages = async () => {
//     let image = slides;
//     setImages(image.slides);
//     selectImage(image.slides);
//   };
  
//   useEffect(() => {
//     getImages();
   
//   }, []);

//   const [selectedImage, setSelectedImage] = useState();
//   const selectImage = (image) => {
//     console.log(image);
//     setSelectedImage(image[0].slide);
//   };

//   return (
//     <div 
//      className="App"
//      style={{
//         display: "flex"
//        }}
//     >
//       <div style={{ display: "flex", justifyContent: "center"}}>
//           <HighImageZoom image={ selectedImage }/> 
//           <div style={{ display: "flex", justifyContent: "space-between"}}>
//             <BsFillArrowLeftCircleFill size="64" onClick={() => { setSelectedImage() }}></BsFillArrowLeftCircleFill>
//             <BsFillArrowRightCircleFill size="64"></BsFillArrowRightCircleFill>
//           </div>
//       </div>
//     </div>
//   );
// }

//-- open sea dragon 이미지 여러장

const App = () =>{
  const [images, setImages] = useState([]);
  
  const getImages = async () => {
    let image = slides;
    setImages(image.slides);
    selectImage(image.slides);
  };
  
  useEffect(() => {
    getImages();
   
  }, []);

  const [selectedImage, setSelectedImage] = useState();
  const selectImage = (image) => {
    console.log(image);
    setSelectedImage(image[0].slide);
  };

  return (
    <div 
     className="App"
     style={{ display: "flex", justifyContent: "center" }}
    >
      <div>
          <HighImageZoom image={ selectedImage }/> 
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <BsFillArrowLeftCircleFill size="64" style={{ padding: "15px" }}></BsFillArrowLeftCircleFill>
            <BsFillArrowRightCircleFill size="64" style={{ padding: "15px" }}></BsFillArrowRightCircleFill>
          </div>
      </div>
    </div>
  );
}
export default App;
