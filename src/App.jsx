import { Switch, Route } from 'wouter'

function App () {
  return (
    <Switch>
      <Route path='/'>
        <h1 className='text-5xl text-center'>Vetly Ecommerce</h1>
      </Route>
      <Route path='/login'>
        <h1 className='text-5xl text-center'>Login</h1>
      </Route>
      <Route>404 Not Found :( </Route>
    </Switch>
  )
}

export default App
