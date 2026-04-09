import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Card = ({personaje}) => {
const{dispatch}=useGlobalReducer();



    

    return (
        <div style={{ width: "300px" }}>
            <img src={personaje.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text">
                    {personaje.species}
                    
                </p>
                 <p className="card-text">
                    {personaje.status}
                    
                </p>
                <button onClick={()=>dispatch({type:"set_favoritos",payload:personaje.name})} className="btn btn-primary">Like</button>
                <Link to={`/single/${personaje.id}`}>
                <button>View Details</button>
                </Link>
                
            </div>
        </div>
    );
};