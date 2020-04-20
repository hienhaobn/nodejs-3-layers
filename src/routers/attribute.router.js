const express = require('express');
const AttributeRouter = express.Router();

const AttributeController = require('../controllers/attribute.controller');

const path = '/attribute';

AttributeRouter.get(path, AttributeController.getAttributes)
AttributeRouter.get(`${path}/:id`, AttributeController.getAttribute)
AttributeRouter.post(path, AttributeController.postAttribute);
AttributeRouter.post(`${path}/:id`, AttributeController.editAttribute);
module.exports = AttributeRouter;