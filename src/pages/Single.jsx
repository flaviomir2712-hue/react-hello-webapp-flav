import { Link, useParams } from "react-router-dom";  
import useGlobalReducer from "../hooks/useGlobalReducer";  

export const Single = () => {
  
  const { store } = useGlobalReducer()
  const { dispatch } = useGlobalReducer()
  const { theId } = useParams()
  const singleTodo = store.personajes.find(todo => todo.id === parseInt(theId));

  return (
    <div className="container text-center">

      <img style={{ width: "300px" }} src={singleTodo.image} className="card-img-top" alt="..." />
      
      <h1 className="display-4">{singleTodo.name}</h1>

      <p className="">{singleTodo.status}</p>
      <p className="">{singleTodo.species}</p>
      <p className="">{singleTodo.gender}</p>

 
      <hr className="my-4" />  

      
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

