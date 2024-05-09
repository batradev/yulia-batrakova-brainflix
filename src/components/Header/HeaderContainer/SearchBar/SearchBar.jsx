import './SearchBar.scss';
// import searchImage from '../../../assets/images/search.svg';
function SearchBar() {
    return (
        <div className="form-container">
        <form className="form">
          <input type="text" id="name" name="name" className="form__field" placeholder="Search" />
        </form>
      </div>
      
    )
}

export default SearchBar;