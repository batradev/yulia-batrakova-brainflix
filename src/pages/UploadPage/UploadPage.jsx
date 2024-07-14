import "./UploadPage.scss";
import { useNavigate } from "react-router-dom";
import VideoTitle from "../../components/MainLayout/MainContent/VideoInfo/VideoTitle/VideoTitle";
import TitleInput from "../../components/TitleInput/TitleInput";
import DescriptionInput from "../../components/DescriptionInput/DescriptionInput";
import UploadButton from "../../components/Header/HeaderContainer/UploadButton/UploadButton";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import axios from 'axios';
import { useState } from 'react';
import defaultImage from "../../assets/images/Upload-video-preview.jpg";
const apiPort = process.env.REACT_APP_API_PORT;

function UploadPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', event.target.elements.title.value);
    formData.append('description', event.target.elements.description.value);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(`http://localhost:${apiPort}/videos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Upload successful");
      navigate(`/video/${response.data.id}`);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };


  return (
    <main>
      <div className="video-info__title-container">
        <VideoTitle title="Upload Video" />
      </div>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="video-info__main-container">
           
            <VideoThumbnail imageUrl={image ? URL.createObjectURL(image) : defaultImage} />
            <div className="form__textarea-container">
              <TitleInput />
              <DescriptionInput />
              <input type="file" onChange={handleImageChange} />
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
              />
            </div>
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
