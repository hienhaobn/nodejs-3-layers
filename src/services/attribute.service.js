const AttributeReponsitory = require('../repository/attribute.reponsitory');
const AttributeDTO = require('../dto/attribute.dto');

const Validate = require('../helper/validate/attribute.validate');

module.exports = {
  'findAttributesService': async () => {
    const attributes = await AttributeReponsitory.findAttributesRepository();
    if(!attributes) {
      return Validate.validateGetDataFormDatabase();
    }
    
    return AttributeDTO.getInfoAttribute(attributes);
  },
  'findAttributeByIdService': async (id) => {
    const attributes = await AttributeReponsitory.findAttributeByIdRepository(id);

    if(!attributes) {
      return Validate.validateGetDataFormDatabase();
    }
    return AttributeDTO.getInfoAttribute(attributes)
  },
  'postAttributeService': async (body) => {
    if(!body){
      return Validate.validateDataBody();
    }
    if(!body.name){
      return Validate.validateByDataFromClient("Can't get name from client");
    }
    const dataAttribute = await AttributeReponsitory.postAttributeRepository(body);
    return AttributeDTO.getInfoAttribute(dataAttribute);
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
    return AttributeDTO.getInfoAttibuteById(dataEditAttribute);
  },
  'removeAtributeService': (id) => {
    if(!id) {
      Validate.validateById();
    }
    return AttributeReponsitory.removeAtributeRepository(id);
  }
}
