// import React, { useState } from "react";

// // import "./SearchBar.css";;

// const SearchBar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");

//     const handleInputChange = (event) => {
//         console.log(event.target.value)
//     setSearchTerm(event.target.value);
//     };

//     const handleSearch = (event) => {
//     event.preventDefault();
//     onSearch(searchTerm);
//     };

//     return (
//             <form onSubmit={handleSearch}>
//             <input
//             type="text"
//             placeholder="Buscar..."
//             value={searchTerm}
//             onChange={handleInputChange}
//             className="search-input" 
//             />
//             <button type="submit" className="search-button">Buscar</button>
//             </form>
//         );
// };

// export default {SearchBar}