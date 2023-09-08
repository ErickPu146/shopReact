/* eslint-disable import/no-anonymous-default-export */
import { createTheme } from 'react-data-table-component';

createTheme('dark', {
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(0,0,0,.12)',
  },
  background: {
    default: '#1E1E2D',
  },
  context: {
    background: '#E91E63',
    text: '#FFFFFF',
  },
  divider: {
    default: 'rgba(81, 81, 81, 1)',
  },
  button: {
    default: '#FFFFFF',
    focus: 'rgba(255, 255, 255, .54)',
    hover: 'rgba(255, 255, 255, .12)',
    disabled: 'rgba(255, 255, 255, .18)',
  },
  selected: {
    default: 'rgba(0, 0, 0, .7)',
    text: '#FFFFFF',
  },
  highlightOnHover: {
    default: '#1E1E2D',
    text: '#FFFFFF',
    background: '#e3f2fd',
  },
  striped: {
    default: '#151521',
    text: '#FFFFFF',
  },
}, 'solarized')

const CustomText =(props)=>{
    return <div data-tag="allowRowEvents" style={{ fontSize:'15px', overflow: 'hidden',  textOverflow: 'ellipses' }}>
    { props } 
  </div>
}

export {
    CustomText
  }