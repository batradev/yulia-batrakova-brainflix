import './MainLayout.scss';
import MainContent from './MainContent/MainContent';
import NextVideos from './NextVideos/NextVideos';

function MainLayout( {mainVideoDetails, videos, handleVideoSelection}) {
    return (
        <div className="main-layout">
        <MainContent mainVideoDetails={mainVideoDetails} />
        <NextVideos videos={videos} onVideoClick={handleVideoSelection} />
        </div>
    )
}

export default MainLayout;