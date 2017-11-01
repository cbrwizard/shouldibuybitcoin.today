import MobileDetect from 'mobile-detect'

/**
 * Is responsible for telling if a current client is a mobile.
 */
const isMobile = () => {
  const mobileDetect = new MobileDetect(window.navigator.userAgent)
  return !!mobileDetect.mobile()
}

export default isMobile
