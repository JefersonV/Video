//Primer action
export const setFavorite = payload => ({
  // indica la acción que se va a ejecutar.
  type: 'SET_FAVORITE',
  //es la información que estamos mandando al reducer. 
  payload,
});
