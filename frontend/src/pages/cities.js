import React, {useEffect, useState} from 'react';


function Cities(){

  const [cities,setCities] = useState([])

    useEffect(() => {
      fetch("http://localhost:4000/api/ciudades")
      .then(res => res.json())
      .then(data => setCities(data.response.cities))
      .catch(err => console.error(err.message))
    },[])

    return (
        <div className="main">
            <h1>Amigos</h1>
            {cities.map(city => <h2> {city.name} </h2>)}
        </div>
    );
}

export default Cities;