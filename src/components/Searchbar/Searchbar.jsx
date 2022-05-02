const Searchbar = ({ handelChange, value, handleSubmit }) => (
  <header>
    <form onSubmit={handleSubmit}>
      <button type="submit" >
        <span>Search</span>
      </button>

      <input
        type="text"
        placeholder="Search images and photos"
        name="query"
      />
    </form>
  </header>
);

export default Searchbar;
