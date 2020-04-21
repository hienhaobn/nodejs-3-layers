const AttributeReponsitory = require('../repository/attribute.reponsitory');
const AttributeDTO = require('../dto/attribute.dto');

const Validate = require('../helper/validate/attribute.validate');

module.exports = {
  'findAttributesService': async () => {
    const attributes = await AttributeReponsitory.findAttributesRepository();
    if(!attributes) {
      return Validate.validateGetDataFormDatabase();
    }

    return attributes.map( (attribute) => {
      let AttributeJson = {
        id: String,
        name: String,
        created_at: String,
        updated_at: String
      }
      AttributeJson.id = attribute._id;
      AttributeJson.name = attribute.name;
      AttributeJson.created_at = JSON.stringify(attribute.created_at).split('T')[0].split('"')[1]
      if(!attribute.updated_at) {
        return "Can't find updated_at";
      }
      AttributeJson.updated_at = JSON.stringify(attribute.updated_at).split('T')[0].split('"')[1]
      return AttributeJson;
    });
    // return AttributeDTO.getInfoAttribute(attributes);
    // console.log(attributes);
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
    return AttributeDTO.getInfoAttibuteById(dataAttribute);
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
