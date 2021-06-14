import axios from 'axios'

export const stockAction = (stock) => async (dispatch) => {
  try {
    dispatch({ type: 'Data_Request' })

    const { data } = await axios.get(
      `https://sandbox.iexapis.com/stable/stock/${stock}/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17`
    )

    dispatch({
      type: 'Data_Success',
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: 'Data_Failed',
      payload: error.response,
    })
  }
}
