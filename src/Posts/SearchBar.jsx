import React,{useState} from "react";

const SearchBar =(props)=>{
    const[searchedContent,setsearchedContent] = useState("")
    const searchContent = (event)=>{
        setsearchedContent(event.target.value);
        props.onSearch(searchedContent)
    }
    return <input type="text" placeholder="Search.." onChange={searchContent}></input>
};

export default SearchBar;