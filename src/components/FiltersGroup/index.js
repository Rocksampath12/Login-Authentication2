import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    searchingTextChanging,
    clearFilterTexts,
    searchText,
    changeSearchText,
    changeCategory,
    changeRating,
  } = props
  const changingSearchText = event => {
    if (event.key === 'Enter') {
      searchingTextChanging(event.target.value)
    }
  }
  const updateSearchText = event => {
    changeSearchText(event)
  }
  const clearFilter = () => {
    clearFilterTexts()
  }
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onKeyDown={changingSearchText}
          onChange={updateSearchText}
          value={searchText}
        />
        <BsSearch className="search-icon" />
      </div>
      <ul className="category-section">
        <li>
          <h1 className="category-main-heading">Category</h1>
        </li>
        {categoryOptions.map(obj => (
          <li
            key={obj.categoryId}
            className="category-heading"
            onClick={() => changeCategory(obj.categoryId)}
          >
            <p>{obj.name}</p>
          </li>
        ))}
      </ul>
      <ul className="rating-section">
        <li>
          <h1 className="category-main-heading">Rating</h1>
        </li>
        {ratingsList.map(obj => (
          <li
            key={obj.ratingId}
            className="rating-list"
            onClick={() => changeRating(obj.ratingId)}
          >
            <img
              src={obj.imageUrl}
              alt={`rating ${obj.ratingId}`}
              className="rating-img"
            />
            <span className="rating-text">& up</span>
          </li>
        ))}
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
