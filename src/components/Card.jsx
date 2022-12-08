import React,{useState} from "react";
// import RefreshIcon from '@mui/icons-material/Refresh';
const Card = (data) =>{
    const [noOfElement, setnoOfElement]=useState(4);
    const loadmore = () =>{
        setnoOfElement(noOfElement + noOfElement);
    } 
    const slice = data.details.slice(0,noOfElement);
    function refreshPage() {
        window.location.reload(false);
      }
    return(
    <>
    <div className="Heading">
    <h1>Recent News</h1>
    </div>
    {slice.map((value,index)=>(
    
     <div className="card" key={index}>
        <div className="card-image">
            <img src={value.img} alt=''/>
        </div>
        <div>
            <p className="card-title">{value.title}</p>
            <p className="description">{value.description}
                 {/* {isReadmoreShown ? value: value.description.substr(0,100)}
            <button onClick={togglebtn}>Readmore</button> */}
            </p>
        </div>
     </div>
     ))}
     
     <button type="button" className="cancelbtn" onClick={refreshPage}>Cancel</button>
       <button type="button" className="morebtn" onClick={()=>loadmore()}>LoadMore</button><br/><br/>
     
    </>
    );
};

export default Card; 





























// import React from "react";
// import './Gallery.css';
// // import Images from './images';
// function Gallery() {
//     return (
//         <div className="overall">
//             <div className="heading">
//                 <h1>Today Content</h1>
//             </div>
//             <div className="row">
//                 <div className="column">
//                     <img src="./images/image1.jpg" alt="Snow" />

//                 </div>
//                 <div className="column">
//                     <img src="./images/image2.jpg" alt="Forest" />
//                 </div>
//                 <div className="column">
//                     <img src="./images/image3.jpg" alt="Mountains" />
//                 </div>
//                 <div className="column">
//                     <img src="./images/image4.jpg" alt="Mountains" />
//                 </div>
                
//             </div>
//         </div>
//     );
// }

// export default Gallery;


