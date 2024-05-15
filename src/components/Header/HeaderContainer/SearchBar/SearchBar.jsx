import './SearchBar.scss';
// import searchImage from '../../../assets/images/search.svg';
function SearchBar() {
    return (
        <div className="search-container">
        <form className="search-container__form">
          <input type="text" id="name" name="name" className="search-form__field" placeholder="Search" />
        </form>
      </div>
      
    )
}

export default SearchBar;