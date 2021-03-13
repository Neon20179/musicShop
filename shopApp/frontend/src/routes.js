import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './common/components/Header/Header'
import CartContainer from './common/containers/CartContainer'
import MusicPlayerContainer from './common/containers/MusicPlayerContainer'
import AlertContainer from './common/containers/AlertContainer'
import DiscoverPageContainer from './pages/DiscoverPage/DiscoverPageContainer'
import ArtistsPageContainer from './pages/ArtistsPage/ArtistsPageContainer'
import TrackPageContainer from './pages/TrackPage/TrackPageContainer'
import AuthorPageContainer from './pages/AuthorPage/AuthorPageContainer'
import SearchContainer from './common/containers/SearchContainer'

const routes = (
    <BrowserRouter>
        <Header />
        <CartContainer />
        <MusicPlayerContainer />
        <SearchContainer />
        <AlertContainer />
        <main>
            <Switch>
                <Route exact path="/" component={DiscoverPageContainer} />
                <Route exact path="/artists/" component={ArtistsPageContainer} />
                <Route exact path="/track/:pk/" component={TrackPageContainer} />
                <Route exact path="/author/:url/" component={AuthorPageContainer} />
            </Switch>
        </main>
    </BrowserRouter>
)

export default routes
