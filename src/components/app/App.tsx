import { Routes, Route } from 'react-router-dom'

import { routes } from '@src/config'

export function App() {
  return (
    <>
      <Routes>
        {routes.map(route => (
          <Route
            index
            id={route.id}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </>
  )
}
