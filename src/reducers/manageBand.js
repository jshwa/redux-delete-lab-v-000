let id = 0;
export default function manageBand(state = {
  bands: [], id: id
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      i++;
      state.id = i
      return { bands: state.bands.concat(action.band) }
    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id !== action.band.id)}
    default:
      return state;
  }
};
