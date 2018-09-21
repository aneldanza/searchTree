import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import {startSearch} from '../../actions/questions_actions';

const msp = (state) => {
  return {
    questions: Object.values(state.entities.questions)
  }
}

const mdp = (dispatch) => {
  return {
    search: (query) => dispatch(startSearch(query)) 
  }
}

export default connect(msp, mdp)(Search);