import './MainContent.scss';
import viewsIcon from '../../../assets/images/views.svg';
import likesIcon from '../../../assets/images/likes.svg';

function MainContent( {mainVideoDetails}) {
    return (
        <div className="main-content">
       <div className="video-info">
    <h1 className="video-info__title">{mainVideoDetails.title}</h1>
    <div className="video-info__user">
        <div className="video-info__user--left"><p className="user__name">By {mainVideoDetails.channel}</p>
        <p className="user__date">{mainVideoDetails.timestamp}</p></div>
        <div className="video-info__user--right"><p className="user__view-count"><img src={viewsIcon} alt="" className="view-count__icon"/>{mainVideoDetails.views}</p>
        <p className="user__like-count"><img src={likesIcon} alt="" className="like-count__icon"/>{mainVideoDetails.likes}</p></div>
    </div>
    <p className="video-info__description">{mainVideoDetails.description}</p>
</div>
<section className="comments">
    <div className="comments__count">3 comments</div>
            <div className="comments__container">
                <div className="avatar-container">
                </div>
                <div className="form-container">
                  <form className="form">
                
                    <label for="comment" className="form__label">JOIN THE CONVERSATION</label>
                    <textarea id="comment" name="comment" className="form__field" placeholder="Add a new comment"></textarea>
                    <button type="submit" className="form__button">COMMENT</button>
                  </form>
                </div>
            </div>
            <div id="comments__list">
            {mainVideoDetails.comments.map((comment) => (
          <div key={comment.id} className="comments-item">
            <div className="comments-item__avatar"></div>
            <div className="comments-item__container">
                <div className="comment__name-date">
                    <h4 className="comment__container-name">{comment.name}</h4>
                    <p className="comment__container-date">{comment.timestamp}</p>
                </div>
                <p className="comment__text">{comment.comment}</p>
            </div>
           
          </div>
        ))}
            </div>
        </section>

        </div>

       

        
    )
}

export default MainContent;