const SearchForm = ({ onSubmitForm }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.search.value.trim();
    evt.target.reset();
    onSubmitForm(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;