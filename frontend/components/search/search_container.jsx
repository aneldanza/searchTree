import React from 'react';
import { connect } from 'react-redux';
import Search from './search';

const msp = (state) => {
  return {
    questions: Object.values(state.entities.questions)
  }
}

export default connect(msp, null)(Search);