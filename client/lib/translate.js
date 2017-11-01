import store from 'client/store'

/*
 * Is responsible for returning a translated version of a string.
 * @note should be used outside React.
 */
const translate = messagePath => store.getState().intl.messages[messagePath]

export default translate
