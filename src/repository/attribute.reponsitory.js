const mongoose = require('mongoose');
const AttributeEntity = require('../entity/attribute.entity');
const Validate = require('../helper/validate/attribute.validate');

module.exports = {
  'findAttributesRepository': async () => {
    return AttributeEntity.find({});
  },
  'findAttributeByIdRepository': async (id) => {
    const dataAttributeGetById = await AttributeEntity.find({_id: id});
    if(!dataAttributeGetById) {
      Validate.validateGetDataFormDatabase('Error find id from database');
    }
    return dataAttributeGetById;
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
      Validate.validateSaveDataToDatabase('Error edit data form database');
    }
    return dataEditAttribute;
  },
  'removeAtributeRepository': async (id) => {
    const dataRemoveAttribute = await AttributeEntity.findByIdAndRemove({_id: id});
    if(!dataRemoveAttribute){
      Validate.validateGetDataFormDatabase('Error remove data from database');
    }
  }
}
