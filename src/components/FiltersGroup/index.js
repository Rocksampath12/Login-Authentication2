import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    searchingTextChanging,
    clearFilterTexts,
    searchText,
  } = props
  let changingSearchText = event => {
    if (event.key === 'Enter') {
      searchingTextChanging(event.target.value)
    }
  }
  let clearFilter = () => {
    clearFilterTexts()
  }
  let changeCategory = event => {
    //1. how should i update the category in state
  }
  let changeRating = event => {
    //2. how should i update the rating in state
    //3. the search input is not working may i know why
    //4. when fetching is wrong then how should i display img
  }
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onKeyDown={changingSearchText}
          value={searchText}
        />
        <BsSearch className="search-icon" />
      </div>
      <ul className="category-section">
        <li>
          <h1 className="category-main-heading">Category</h1>
        </li>
        {categoryOptions.map(obj => {
          return (
            <li
              key={obj.categoryId}
              className="category-heading"
              onClick={changeCategory}
            >
              {obj.name}
            </li>
          )
        })}
      </ul>
      <ul className="rating-section">
        <li>
          <h1 className="category-main-heading">Rating</h1>
        </li>
        {ratingsList.map(obj => {
          return (
            <li key={obj.ratingId} className="rating-list">
              <img src={obj.imageUrl} alt="" className="rating-img" />
              <span className="rating-text">& up</span>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        className="clear-filter-button"
        onClick={clearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
