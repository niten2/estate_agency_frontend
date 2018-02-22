import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import { client } from "src/config/apollo_client"
import { PrivateLayout } from "src/components/shared/layout"

import Main from "src/components/main"
import Page404 from "src/components/shared/page404"
import Login from "src/components/login"
import AdminRooms from "src/components/admin/rooms"
import AdminNewRoom from "src/components/admin/rooms/new"
import AdminShowRoom from "src/components/admin/rooms/show"

export default () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/404" component={Page404}/>
          <Route exact={true} path="/" component={Main} />

          <Route exact={true} path="/admin" component={Login}/>

          <PrivateLayout exact={true} path="/admin/rooms" component={AdminRooms}/>
          <PrivateLayout exact={true} path="/admin/rooms/new" component={AdminNewRoom}/>
          <PrivateLayout exact={true} path="/admin/rooms/:id" component={AdminShowRoom}/>

          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
}
