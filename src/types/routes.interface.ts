import { FunctionComponent } from 'react'

export interface IRoute {
  id: string
  path: string
  element: FunctionComponent

  auth?: boolean
  navigate?: boolean

  icon?: FunctionComponent
}
