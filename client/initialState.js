/*
 * Is responsible for storing the whole app's initial frontend state.
 */
const initialState = {
  game: {
    currentTurnsLeft: 0,
    hoveredSquareInfo: {},
    isFetchingGameSession: false,
    isLatestDataLoaded: false,
    planningState: 'ready', // 'ready' || 'processing'
    positionCameraAtSquarePosition: '',
    selectedSquaresPositions: [],
    squaresCount: 0,
    squaresToCaptureMax: 1,
    started: false,
  },
  greeting: {
    isLoading: true,
  },
  messages: {
    isLoading: false,
    records: [],
  },
  modals: {},
  session: {
    isLoggedIn: false,
    user: null,
  },
  territories: {
    current: {
      color: '',
      copiedImageUUID: '',
      imageUUID: '',
      linkText: '',
      linkUrl: '',
      nick: '',
      squarePositions: [],
      userId: '',
    },
    others: [],
  },
  tutorial: {
    // opened: false,
    position: {
      left: 0,
      top: 0,
    },
    step: 0,
  },
}

export default initialState
