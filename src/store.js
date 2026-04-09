export const initialStore=()=>{
  return{
    message: null,
    personajes: [],
    favoritos: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_personaje':
      return {
        ...store,
        personajes:action.payload
      }
      case 'set_favoritos':
      return {
        ...store,
        favoritos:[...store.favoritos, action.payload]
      }


    default:
      return store
  }    
}
