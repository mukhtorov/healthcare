import React from 'react'
import { Container } from './style'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { navbar } from '../utils/navbar'

export default () => {
    return (
        <Router>
            <Container>
                <Navbar />
                <Switch>
                    {
                        navbar.map(({ path, component }) => (
                            <Route path={path} component={component} />
                        ))
                    }
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
                <Footer />
            </Container>
        </Router>
    )
}
