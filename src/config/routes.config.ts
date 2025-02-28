import * as pages from '@src/pages'
import { IRoute } from '@src/types/routes.interface'

import { constants } from './constants.config'

export const routes: IRoute[] = [
  {
    id: 'Главная',
    path: constants.routes.home,
    element: pages.HomePage
  }
]
