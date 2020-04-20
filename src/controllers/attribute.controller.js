const express = require('express');

const AttributeService = require('../services/attribute.service');

module.exports = {
  'getAttributes': async (req, resp) => {
    const attributes = await AttributeService.findAttributes();
    resp.json(statusSuccess('Get all data from colletion Attribute!', attributes));
  },
  'getAttribute': async (req, resp) => {
    let id = req.params.id;
    if (!id) {
      resp.json(statusGetById());
    }
    const attribute = await AttributeService.findAttributeById(id);
    if(!attribute) {
      resp.status(400).json(statusGetDataFail());
    }
    resp.status(200).json(statusSuccess('Find one document from collection Attribute!'));
  },
  'postAttribute': async (req, resp) => {
    if(!req.body) {
      resp.status(400).json(statusGetDataFail());
      return;
    }
    const attribute = await AttributeService.postAttribute(req.body);
    if(!attribute) {
      resp.json(statusGetDataFail());
      return;
    }
    resp.json(attribute);
  },
  'editAttribute': async (req, resp) => {
    const id = req.params.id;
    let body = req.body;
    if (!id) {
      resp.json(statusGetById());
    }
    if(!body) {
      resp.json(statusGetBodyFail());
    }
    const attribute = await AttributeService.editAttribute(id, body);
    if(!attribute) {
      resp.json(statusGetDataFail());
    }
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