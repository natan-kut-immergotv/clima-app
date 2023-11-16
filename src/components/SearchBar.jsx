import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearchSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Transforma el primer carácter de cada palabra a mayúscula
    const toTitleCase = (str) => {
        return str.replace(/\b(\w)/g, s => s.toUpperCase());
    };

    // Maneja el cambio en el input
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Maneja el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(toTitleCase(searchTerm)); // Envía el término de búsqueda transformado
        setSearchTerm(''); // Opcionalmente, limpia el campo de búsqueda
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Buscar ciudad..."
            />
            <button type="submit">Buscar</button>
        </form>
    );
}

SearchBar.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired
};

export default SearchBar;
