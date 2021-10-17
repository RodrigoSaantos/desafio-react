import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AppRoutes from "./routes"
import { CheckboxProvider } from "./services/hook/Checkbox";

const App = () => {
  return (
    <Router>
      <CheckboxProvider>
        <Switch>

          {AppRoutes.map((route, key) => {
          const { component, path } = route;
          const Component = component;

          return (
            <Route
              exact={true}
              path={path}
              key={key}
              render={Component}
            />
          )
        })}
        </Switch>
      </CheckboxProvider>
    </Router>
  )
}

export default App;
