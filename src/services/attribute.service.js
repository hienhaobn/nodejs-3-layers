const AttributeReponsitory = require('../repository/attribute.reponsitory');
const AttributeDTO = require('../dto/attribute.dto');

const AttributeConstant = require('../constants/db.constant');
const Validate = require('../helper/validate/attribute.validate');

module.exports = {
  'findAttributesService': async () => {
    const attributes = await AttributeReponsitory.findAttributesRepository();
    if(!attributes) {
      return Validate.validateGetDataFormDatabase();
    }
    
    return attributes.map( (attribute) => {
      AttributeConstant.Attribute.id = attribute._id;
      AttributeConstant.Attribute.name = attribute.name;
      AttributeConstant.Attribute.created_at = JSON.stringify(attribute.created_at).split('T')[0].split('"')[1]
      if(!attribute.updated_at) {
        return "Can't find updated_at";
      }
      AttributeConstant.Attribute.update_at = JSON.stringify(attribute.updated_at).split('T')[0].split('"')[1]
      return AttributeConstant.Attribute;
    });
    
  },
  'findAttributeByIdService': async (id) => {
    const attributes = await AttributeReponsitory.findAttributeByIdRepository(id);

    if(!attributes) {
      return Validate.validateGetDataFormDatabase();
    }
    
    return attributes.map( (attribute) => {
      AttributeConstant.Attribute.id = attribute._id;
      AttributeConstant.Attribute.name = attribute.name;
      AttributeConstant.Attribute.created_at = JSON.stringify(attribute.created_at).split('T')[0].split('"')[1];
      AttributeConstant.Attribute.updated_at = JSON.stringify(attribute.updated_at).split('T')[0].split('"')[1];
      return AttributeConstant.Attribute;
    });
  },
  'postAttributeService': (body) => {
    if(!body){
      return Validate.validateDataBody();
    }
    if(!body.name){
      return Validate.validateByDataFromClient("Can't get name from client");
    }
    return AttributeReponsitory.postAttributeRepository(body);
  },
  'editAttributeService': async (id,body) => {
    if(!body){
      return Validate.validateDataBody();
    }
    if(!body.name){
      return Validate.validateByDataFromClient("Can't get name from client");
    }
    if(!id) {
      return Validate.validateById();
    }
    const dataEditAttribute = await AttributeReponsitory.editAttributeRepository(id, body);
    return dataEditAttribute.map(data => {
      Atri
      AttributeConstant.Attribute.name = data.name;
    })
  },
  'removeAtributeService': (id) => {
    return AttributeReponsitory.removeAtributeRepository(id);
  }
}
