const mongoose = require('mongoose');
const AttributeReponsitory = require('../repository/attribute.reponsitory');
module.exports = {
  'findAttributes': async () => {
    const attributes = await AttributeReponsitory.findAttributes();
    if(!attributes) {
      return statusGetDataFail();
    }
    console.info(attributes);
    return attributes.map( attribute => attribute )
  },
  'findAttributeById': async (id) => {
    return AttributeReponsitory.findAttributeById(id);
  },
  'postAttribute': (body) => {
    return AttributeReponsitory.postAttribute(body);
  },
  'editAttribute': (body) => {
    return AttributeReponsitory.editAttribute(id, body);
  }
}

function statusGetDataFail() {
  return {
    status: 'fail',
    message: "Can't get data from database!"
  }
}
function statusGetBodyFail() {
  return {
    status: 'fail',
    message: "Can't get data from request body client!"
  }
}
function statusGetById() {
  return {
    status: 'fail',
    message: "Can't get id from request client!"
  }
}
function statusSuccess(message, data){
  return {
    status: 'success',
    message,
    data
  }
}