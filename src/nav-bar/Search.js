import './Search.css'

const Search = () => {
    return(
    <div nameClass='input-group  flex justify-center items-center h-screen'>
        <input type='text' id='name' required className='input' />
        <label htmlFor='name' className='input-label'>Search</label>
    </div>
)
    
}

export default Search;