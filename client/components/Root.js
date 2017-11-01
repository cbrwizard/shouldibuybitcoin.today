/* eslint camelcase: 0 */
/*
 * Is responsible for rendering the whole app.
 */
import React from 'react'
import { object } from 'prop-types'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl-redux'
import ReduxToastr from 'react-redux-toastr'

import AppContainer from 'client/containers/AppContainer'

const propTypes = {
  store: object.isRequired,
}

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="h-height-full" style={{ background: '#fff' }}>
      <IntlProvider>
        <AppContainer />
      </IntlProvider>
      <ReduxToastr />
    </div>
  </Provider>
)

Root.propTypes = propTypes

export default Root
