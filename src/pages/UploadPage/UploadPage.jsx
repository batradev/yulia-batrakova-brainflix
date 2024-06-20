import "./UploadPage.scss";
import { useNavigate } from 'react-router-dom';
import VideoTitle from "../../components/MainLayout/MainContent/VideoInfo/VideoTitle/VideoTitle";
import TitleInput from "../../components/TitleInput/TitleInput";
import DescriptionInput from "../../components/DescriptionInput/DescriptionInput";
import UploadButton from "../../components/Header/HeaderContainer/UploadButton/UploadButton";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";


function UploadPage() {
  
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert('Upload successful');
      navigate('/');
    };

  return (
    <main>
 
    <div className="video-info__title-container">
    <VideoTitle title="Upload Video" />
    </div>
   
    
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
    <div className="video-info__main-container">
       <VideoThumbnail imageUrl="../../assets/images/Upload-video-preview.jpg" />
        <div className="form__textarea-container">
        <TitleInput />
        <DescriptionInput />
        </div>
        </div>

        <div className="form__buttons-container">
        <div className="cancel__button-container">
            <UploadButton
        className="cancel__button"
        type="button"
        buttonText="CANCEL"
        />
        </div>
        <UploadButton
        className="publish__button"
        type="submit"
        buttonText="PUBLISH"
        />
        <div className="cancel__buttonfirst-container">
        <UploadButton
        className="cancel__buttonfirst"
        type="button"
        buttonText="CANCEL"
        /></div>
        </div>
    </form>
   
    </div>


     </main>
  );
}

export default UploadPage;





// import "./UploadPage.scss";
// import VideoTitle from "../../components/MainLayout/MainContent/VideoInfo/VideoTitle/VideoTitle";
// import TitleInput from "../../components/TitleInput/TitleInput";
// import DescriptionInput from "../../components/DescriptionInput/DescriptionInput";
// import UploadButton from "../../components/Header/HeaderContainer/UploadButton/UploadButton";
// import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";


// function UploadPage() {
//   return (
//     <>
 
//     <div className="video-info__title-container">
//     <VideoTitle title="Upload Video" />
//     </div>
   
    
//     <div className="form-container">
//     <form className="form">
//     <div className="video-info__main-container">
//        <VideoThumbnail imageUrl="../../assets/images/Upload-video-preview.jpg" />
//         <div className="form__textarea-container">
//         <TitleInput />
//         <DescriptionInput />
//         </div>
//         </div>

//         <div className="form__buttons-container">
//         <div className="cancel__button-container">
//             <UploadButton
//         className="cancel__button"
//         type="submit"
//         buttonText="CANCEL"
//         />
//         </div>
//         <UploadButton
//         className="publish__button"
//         type="submit"
//         buttonText="PUBLISH"
//         />
//         <div className="cancel__buttonfirst-container">
//         <UploadButton
//         className="cancel__buttonfirst"
//         type="submit"
//         buttonText="CANCEL"
//         /></div>
//         </div>
//     </form>
   
//     </div>


//      </>
//   );
// }

// export default UploadPage;
