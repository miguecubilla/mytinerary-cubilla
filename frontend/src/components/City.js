import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Card, Button } from 'bootstrap-4-react/lib/components';



export const City = () => {
    const [cities,setCity]=useState([])
    let {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:4000/api/city/"+id)
        .then(res => setCity([res.data.respuesta]))
    },[])
    return (
        <div className="container-fluid" align="center">
            
            {cities.map((elem, i) => {
                    return (
                    <Card display="inline-block" align="center" ml="4" mr="1" p="3" style={{ width: '80%'}}>                        
                            <Card.Image src={elem.image} top />                        
                        <Card.Body>
                            <Card.Text>
                                <h3>Enjoy {elem.name}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    )
            })
            }
            <Link to="/cities"><Button secondary lg>Back to cities</Button></Link>
            <h1>Under Construction</h1>
        </div>              
    )
}
