import React, {useState} from 'react'

const SearchMovies = () => {

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        
        console.log("submitting");

        //const query = "Jurassic Park";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=4679b9815a4209c0c0b34d4ef5071d0f&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results)
        }catch(err){
            console.error(err)
        }    
    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies} >
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchMovies;
