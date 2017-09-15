const state = {
  texts: {
    shoulder: 'NEXT PROGRAM',
    title: ''
  },
  countdown: {
    hh: '',
    mm: '30',
    ss: '00'
  }
}

const mutations = {}

const actions = {}

const getters = {
  texts: state => state.texts,
  countdown: state => state.countdown
}

export default {
  state,
  mutations,
  actions,
  getters
}
