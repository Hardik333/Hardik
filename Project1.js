import React, { useDebugValue, useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from './Checkbox';



function Project1() {
    const styles = {
        display: 'inline',
        width: '30%',
        height: 50,
        borderstyle: 'none',
        padding: 5,

        marginBottom: 10,
        marginRight: 10
    }



    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
           
            return data.name.search(new RegExp(value,)) != -1;

        });
        setFilteredData(result);
    }
    
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    useEffect(() => {
        axios('http://my-json-server.typicode.com/habilelabs/fake-products/products')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log('no data: ' + error);
            })
    }, []);

    return (
        <div className="App">
            <div style={styles} className='header'>
                <label>Search:</label>
                <input type="text" onChange={(event) => handleSearch(event)} />
                <div className='checkbox' ><Checkbox /></div>
                
            </div>
            <div style={{ padding: 10 }} className='box'>
                {filteredData.map((value, index) => {
                    return (
                        <div className='card-container'>
                            <div style={styles} >
                                <div className='category'>{value.category}</div>
                                <div className='name'>{value.name}</div>
                                <div className='price'>{value.price}</div>


                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}




export default Project1;