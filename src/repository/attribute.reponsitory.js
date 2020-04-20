const mongoose = require('mongoose');
const AttributeEntity = require('../entity/attribute.entity');

module.exports = {
  'findAttributes': () => {
    return AttributeEntity.find({});
  },
  'findAttributeById': (id) => {
    return AttributeEntity.find({_id: id});
  },
  'postAttribute': (body) => {
    if(!body){
      return statusCode('fail', "Can't get data")
    }
    let attribute = new AttributeEntity({
      name: body.name,
      status: true,
      updated_at: Date.now()
    });
    attribute.save( (error) => {
      if(error)
       return error;
    });
    return attribute;
  },
  'editAttribute': (id, body) => {
    
  }
}

function statusCode(status, message) {
  return {
    status,
    message
  }
}