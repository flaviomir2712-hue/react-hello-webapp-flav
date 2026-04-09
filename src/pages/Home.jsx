import useGlobalReducer from "../hooks/useGlobalReducer.jsx"; //1.0
import { useState,useEffect } from "react";
import { Card } from "../components/Card.jsx";

export const Home = () => {

const{store,dispatch}=useGlobalReducer();

useEffect(()=>{
	async function informacion(){
try {
			let response = await fetch('https://rickandmortyapi.com/api/character', { method: 'GET' })
			let data = await response.json()
            dispatch({type:"set_personaje",payload:data.results})
		} 
		catch (error) {
			console.log(error);
			return error;
		}
	}	

	informacion()

},[])


	return (
		<div className="d-flex gap-5">
			{store.personajes.length === 0 ? <p>loading</p> : store.personajes.map((personaje) => (
				<Card personaje={personaje} />
			 ))
			}
		
		</div>
	);
}; 