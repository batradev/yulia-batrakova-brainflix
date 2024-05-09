import './HeaderContainer.scss';
import SearchBar from './SearchBar/SearchBar';
import UserAvatar from './UserAvatar/UserAvatar';
function HeaderContainer() {
    return (
        <div className="comments__container">
          <SearchBar />
          <UserAvatar />
       
        </div> 
    )
}

export default HeaderContainer;