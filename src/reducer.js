export const stockReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case 'Data_Request':
      return { loading: true, data: [] }
    case 'Data_Success':
      return { loading: false, data: action.payload }
    case 'Data_Failed':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
