import React from 'react'
import styled from 'styled-components'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'

const DataCenter = ({ test }) => {
  return (
    <DataContainer>
      <HeaderContainer>
        <TitleContainer>
          <Title>{test?.symbol}</Title>
          <Subtitle>{test?.companyName}</Subtitle>
        </TitleContainer>
        <PriceContainer>
          <Price>{test?.open}</Price>
          <PriceUpDown
            style={{
              color: `${test?.change < 0 ? 'Red' : 'green'}`,
            }}
          >
            {test?.change} {`(${test?.changePercent})`}
          </PriceUpDown>
        </PriceContainer>
      </HeaderContainer>
      <MarketInfo>
        <Left>
          <Mcap>
            <h4>Mk Cap</h4> <p>{test?.marketCap}</p>{' '}
          </Mcap>
          <Av>
            <h4>Avg. Volume</h4>
            <ElementData>
              <p>{test?.avgTotalVolume}</p>
            </ElementData>
            {/* <p>{test?.avgTotalVolume}</p> */}
          </Av>
          <PeRation>
            <h4>P/E ratio</h4> <p>{test?.peRatio}</p>
          </PeRation>
        </Left>
        <Right>
          <PreClose>
            <h4>Pre Close</h4>
            <ElementData>
              <p> {test?.previousClose}</p>
            </ElementData>
          </PreClose>
          <High>
            <h4>High</h4>
            <p>{test?.week52High}</p>
          </High>
          <Low>
            <h4>Low</h4>
            <p>{test?.week52Low}</p>
          </Low>
        </Right>
      </MarketInfo>
    </DataContainer>
  )
}

export default DataCenter

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;

  width: auto;
  height: 238px;

  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.16);
  border-radius: 24px;
`
const Title = styled.h1``
const Subtitle = styled.p``
const Price = styled.h1``
const PriceUpDown = styled.p`
  color: #34a853;
`
const HeaderContainer = styled.div`
  display: flex;
`
const TitleContainer = styled.div``
const PriceContainer = styled.div`
  margin-left: 390px;
`
const MarketInfo = styled.div`
  margin-top: 50px;
  display: flex;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
`

const Mcap = styled.div`
  display: flex;
  padding: 5px;
  > p {
    margin-left: auto;
  }
`
const Av = styled.div`
  display: flex;
  padding: 5px;
  > p {
    margin-left: auto;
  }
`

const PreClose = styled.div`
  display: flex;
  padding: 5px;
  > p {
    margin-left: auto;
  }
`
const High = styled.div`
  display: flex;
  padding: 5px;
  > p {
    margin-left: auto;
  }
`
const Low = styled.div`
  display: flex;
  padding: 5px;
  > p {
    margin-left: auto;
  }
`
const PeRation = styled.div`
  display: flex;
  padding: 5px;
  > p {
    margin-left: auto;
  }
`
const ElementData = styled.div`
  margin-left: 70px;
`
