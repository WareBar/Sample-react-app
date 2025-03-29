import styles from '../styles/Search.module.css'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({setQuery}) => {
    const [searching, setSearching] = useState('')


    return (
        <div className={styles.Search}>

            

            <input type="search" className={styles.searchInput} placeholder="Search for news" onChange={(e)=>{
                console.log(e.target.value)
                setSearching(e.target.value)
            }}/>
            <button type="button" onClick={()=>{
                console.log("search button clicked")
                setQuery(searching)

            }}><FontAwesomeIcon icon={faSearch}/></button>       
        </div>
    )
}

export default Search;