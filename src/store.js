export const initialStore = () => {
  return {
    message: null,
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "GET_CHARACTERS":
      return {
        ...store,
        characters: action.payload
      }

    case "GET_PLANETS":
      return {
        ...store,
        planets: action.payload
      }

    case "GET_VEHICLES":
      return {
        ...store,
        vehicles: action.payload
      }

    case "ADD_FAVORITE":
      const itemToAdd = action.payload;
      const isAlreadyFavorite = store.favorites.find(fav => fav.uid === itemToAdd.uid && fav.type === itemToAdd.type);
      
      if (!isAlreadyFavorite) {
        return {
          ...store,
          favorites: [...store.favorites, itemToAdd]
        };
      }
      return store;

    case "REMOVE_FAVORITE":
      const itemToRemove = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(fav => !(fav.uid === itemToRemove.uid && fav.type === itemToRemove.type))
      };

    default:
      throw Error('Unknown action.');
  }
}