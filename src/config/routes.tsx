import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import { client } from "src/config/apollo_client"
import { PrivateLayout } from "src/components/shared/layout"

import Dashboard from "src/components/dashboard"
import Page404 from "src/components/shared/page404"
import Rooms from "src/components/rooms"
import Login from "src/components/login"

export default () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/404" component={Page404}/>
          <Route exact={true} path="/" component={Dashboard} />

          <Route exact={true} path="/admin" component={Login}/>
          <PrivateLayout exact={true} path="/admin/rooms" component={Rooms}/>

          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
}
