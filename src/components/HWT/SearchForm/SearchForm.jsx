import css from "./SearchForm.module.css";

const SearchForm = ({ filter, handleFilter }) => {
  return (
    <div className={css.searchBlock}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        placeholder="type the name"
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchForm;
