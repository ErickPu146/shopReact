/* eslint-disable import/no-anonymous-default-export */
import { Alert } from 'react-bootstrap'

export let state = [
    'alert-dismissible bg-light-danger text-danger',
    'alert-dismissible bg-light-success text-success'    
  ];

const SimpleState = (data) => {
    return (
      <Alert variant={state[data.idEstado]} className="w-100 text-center alert-xs fw-bolder">
        { data.estado }
      </Alert>
    )
  }

  export {
    SimpleState
  }