module.exports = {
  'validateGetDataFormDatabase': () => {
    return {
      status: 'fail',
      message: "Can't get data from database!"
    }
  },
  'validateDataBody': () => {
    return {
      status: 'fail',
      message: "Can't get data from client send to server!"
    }
  },
  'statusSuccess': (message, data) => {
    return {
      status: 'success',
      message,
      data
    }
  },
  'validateById': () =>  {
    return {
      status: 'fail',
      message: "Can't get id from request client!"
    }
  },
  'validateByDataFromClient': (message) => {
    return {
      status: 'fail',
      message
    }
  },
  'validateSaveDataToDatabase': (message) => {
    return {    
      status: 'fail',
      message
    }
  }
}