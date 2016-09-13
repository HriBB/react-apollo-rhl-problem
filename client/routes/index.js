import React from 'react'
import { Route } from 'react-router'

import App from 'components/App'
import Home from 'components/Home'

import Admin from 'components/Admin'
import AdminGallery from 'components/Admin/Gallery'
import AdminGalleryList from 'components/Admin/Gallery/GalleryList'

import NotFound from 'components/NotFound'

const publicRoutes = [{
  path: '/',
  component: Home
}]

const adminRoutes = [{
  path: 'admin',
  component: Admin,
  childRoutes: [{
    path: 'gallery',
    component: AdminGallery,
    indexRoute: {
      component: AdminGalleryList
    }
  }]
}]

const routes = {
  component: App,
  childRoutes: [
    ...publicRoutes,
    ...adminRoutes,
    { path: '*', component: NotFound }
  ]
}

export default routes
