const AttributeService = require('../services/attribute.service');

const AttributeValidate = require('../helper/validate/attribute.validate');
module.exports = {

  'getAttributesController': async (req, resp) => {
    const attributes = await AttributeService.findAttributesService();
    resp.json(AttributeValidate.statusSuccess('Get all data from colletion Attribute!', attributes));
  },

  'getAttributeController': async (req, resp) => {
    let id = req.params.id;
    if (!id) {
      resp.json(AttributeValidate.validateById());
    }
    const attribute = await AttributeService.findAttributeByIdService(id);
    resp.status(200).json(AttributeValidate.statusSuccess('Find a document from collection Attribute!', attribute));
  },

  'postAttributeController': async (req, resp) => {
    const attributePost = await AttributeService.postAttributeService(req.body);
    resp.json(AttributeValidate.statusSuccess('Post a document form client to collection Attribute!', attributePost));
  },

  'editAttributeController': async (req, resp) => {
    const id = req.params.id;
    let body = req.body;
    if (!id) {
      resp.json(AttributeValidate.validateById());
    }
    if(!body) {
      resp.json(AttributeValidate.validateDataBody());
    }
    const attributeEdit = await AttributeService.editAttributeService(id, body);
    resp.json(AttributeValidate.statusSuccess(`Edited a record with id = ${id}`, attributeEdit));
  },

  'removeAttributeController': async (req, resp) => {
    const id = req.params.id;
    if (!id) {
      resp.json(AttributeValidate.validateById());
    }
    const attributeRemove =  await AttributeService.removeAtributeService(id);
    return resp.json(AttributeValidate.statusSuccess(`Removed a record with id = ${id}`, attributeRemove));
  }
}
