function SearchBar({ value, onChange }) {

    return (

        <input
            type="text"
            placeholder="Buscar profesional..."
            value={value}
            onChange={(event) =>
                onChange(event.target.value)
            }
        />

    );
}

export default SearchBar;