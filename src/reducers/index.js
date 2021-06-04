const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVORITE':
			const exist = state.myList.find(item => item.id === action.payload.id)	
			if(exist) return {...state}

			return {
				
				//state: Es el estado que el Stage envía al Reduce. Por lo tanto, es el estado que se va a actualizar.
				...state,
				
				//action: Es la acción encapsulada que fue enviada por el componente al Reduce para que se actualice el estado del Stage.
				myList: [...state.myList, action.payload],
			};

			case 'DELETE_FAVORITE':
				return {
					 ...state,
					 myList: state.myList.filter(items => items.id ==! action.payload)
				}

			case 'LOGIN_REQUEST':
				return {
					...state,
					//le transmitimos el objeto que creamos en el action (login)
					user: action.payload,
				}	
			
			case 'LOGOUT_REQUEST':
				return {
					...state,
					user: action.payload,

				}

			case 'REGISTER_REQUEST':
				return {
					...state,
					user: action.payload,
				}	

			case 'GET_VIDEO_SOURCE':
				return {
					...state,
					//el parámetro que pasamos por url llega como un string, por eso lo forzamos a que venga como un number
					playing: state.trends.find(item => item.id === Number(action.payload)) 
					|| state.originals.find(item => item.id === Number(action.payload)) 
					|| []  
				}
			
		default:
			return state;
	}
};

export default reducer;