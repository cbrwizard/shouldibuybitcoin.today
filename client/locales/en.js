/*
 * Is responsible for storing the english texts.
 * TODO: move to a shared folder.
 */
const intl = {
  defaultLocale: 'en',
  locale: 'en',
  messages: {
    'app.forms.vote.no': 'No',
    'app.forms.vote.yes': 'Yes',
    'app.text.answer.singleWord.no': 'No.',
    'app.text.answer.singleWord.unknown': '??',
    'app.text.answer.singleWord.yes': 'Yes!',
    'app.text.answer.voteTomorrow': 'You can vote only once per day. Come back tomorrow!',
    'app.text.answer.voteToo': 'Vote too!',
    'app.text.answer.webVoted': 'The web voted so in %{percentVoted} of times.',
    'app.text.question': 'Should I buy ₿ today?',
    'app.text.takeCare': 'Warning: investing is a risk. This website is not responsible for any losses.',
  },
}

export default intl
