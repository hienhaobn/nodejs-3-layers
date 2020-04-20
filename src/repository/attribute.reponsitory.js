const mongoose = require('mongoose');
const AttributeEntity = require('../entity/attribute.entity');
const Validate = require('../helper/validate/attribute.validate');
module.exports = {
  'findAttributesRepository': () => {
    return AttributeEntity.find({});
  },
  'findAttributeByIdRepository': (id) => {
    return AttributeEntity.find({_id: id});
  },
  'postAttributeRepository': (body) => {
    let attribute = new AttributeEntity({
      name: body.name,
      updated_at: Date.now()
    });
    attribute.save( (error) => {
      if(error)
       return error;
    });
    return attribute;
  },
  'editAttributeRepository': async (id, body) => {
    const dataEditAttribute = await AttributeEntity.findByIdAndUpdate({_id: id}, {$set: {name: body.name, updated_at: Date.now()}}, {new: true})
    if(!dataEditAttribute) {
      Validate.validateSaveDataToDatabase("Error eidt data form database");
    }
    return dataEditAttribute;
  },
  'removeAtributeRepository': (id) => {
    return AttributeEntity.findByIdAndRemove({_id: id});
  }
}

function statusCode(status, message) {
  return {
    status,
    message
  }
}