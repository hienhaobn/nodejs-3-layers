const AttributeConstant = require('../constants/db.constant');

module.exports = {
  'infoAttribute': (attributes) => {
    attributes.map( (attribute) => {
      AttributeConstant.Attribute.id = attribute._id;
      AttributeConstant.Attribute.name = attribute.name;
      AttributeConstant.Attribute.created_at = JSON.stringify(attribute.created_at).split('T')[0].split('"')[1];
      AttributeConstant.Attribute.updated_at = JSON.stringify(attribute.updated_at).split('T')[0].split('"')[1];
      return AttributeConstant.Attribute;
    });
  }
}