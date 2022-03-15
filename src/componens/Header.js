import { useState, useRef } from "react"
import { SearchList } from "./styled/SearchList.Styled"

const Header = ({setWeather, setArea}) => {


    const [searchRegion, setSearchRegion] = useState([])
    const [visibility ,setVisibility] = useState(true)
    const [schList, setSchlist] = useState([])
    const schEl = useRef(null);



    const handleSearch = (term) =>{
        setSearchRegion(term)
        console.log(term.length);
        if(term.length >= 3){
            setVisibility(true)
            setSchlist([])
            fetch(`http://api.weatherapi.com/v1/search.json?key=110585d5a744455191d171919220803&q=${searchRegion}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSchlist(data)
            })
        } else{
            setVisibility(false)

        }
        

    }

    const handleSelect = (name) => {
        setWeather([])
        console.log(name);
        setVisibility(false)
        setArea(name)
        schEl.current.value = '';
    }



    return ( 
        <div>
            <h4>THis is header</h4>

            <input type="text" ref={schEl} placeholder="search" onChange={(e)=> handleSearch(e.target.value)} />
               {
                    visibility &&
                    <SearchList>
                            {
                                schList && 
                                schList.map((element,i)=>{
                                    return(
                                        <div key={i} onClick={()=>handleSelect(element.name)}>
                                            <label htmlFor="">{element.name}</label>
                                            <label htmlFor="">{element.country}</label><br/>
                                        </div>
                                    )
                                })
                            }
                    </SearchList>
               }
        </div>
     );
}
 
export default Header;