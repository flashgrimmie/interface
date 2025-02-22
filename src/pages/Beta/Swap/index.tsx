import React from 'react'
import { PageWrapper, GridContainer, TopContainer, StatsWrapper } from './styleds'
import MyPortfolio from './MyPortfolio'
import WatchList from './WatchList'
import PairInfo from './PairInfo'
import SwapWidget from './SwapWidget'

const SwapUI = () => {
  return (
    <PageWrapper>
      <TopContainer>
        <StatsWrapper>
          <PairInfo />
        </StatsWrapper>
        <SwapWidget />
      </TopContainer>
      <GridContainer>
        <MyPortfolio />
        <WatchList />
      </GridContainer>
    </PageWrapper>
  )
}
export default SwapUI
