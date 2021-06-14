import './App.css'
import styled from 'styled-components'
import { useState } from 'react'
import CircularProgressWithLabel from '@material-ui/core/CircularProgress'
import DataCenter from './DataCenter'
import { useDispatch, useSelector } from 'react-redux'
import { stockAction } from './action'

function App() {
  const [stock, setStock] = useState('')

  const dispatch = useDispatch()
  const stockData = useSelector((state) => state.stockData)
  const { loading, error, data } = stockData
  console.log('sdfd', data)
  const FetchData = async (e) => {
    e.preventDefault()
    dispatch(stockAction(stock))
  }

  const onChangeHandler = (event) => {
    event.preventDefault()
    setStock(event.target.value)
  }

  return (
    <AppContainer>
      <SearchContainer>
        <Search
          placeholder='Stock Ticker'
          value={stock}
          onChange={onChangeHandler}
        />
        <SearchButton onClick={FetchData}>Search</SearchButton>
      </SearchContainer>

      {!data ? (
        <h2>Please enter symbol ticker</h2>
      ) : loading ? (
        <CircularProgressWithLabel />
      ) : error ? (
        <h2 style={{ color: 'red' }}> Invalid ticker symbol.</h2>
      ) : (
        // <h1>test</h1>
        <div style={{ display: `${!data ? 'none' : 'flex'}` }}>
          <DataCenter test={data} />
        </div>
      )}
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  height: 70vh;
`
const SearchContainer = styled.form`
  /* display: flex; */
  /* justify-content: center;
  align-items: center;
  margin-top: 150px; */
`
const Search = styled.input`
  height: 35px;
  border-radius: 20px;
  outline: none;
  width: 220px;
  padding-left: 10px;
  line-height: 21.11px;
  font-size: 14px;
  color: #aaaaaa;
`
const SearchButton = styled.button`
  margin-left: 10px;
  padding: 8px;
  border-radius: 20px;
  background-color: #000000;
  color: white;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`
