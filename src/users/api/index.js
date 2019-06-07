// @flow
import { authGet, authPost, authPut, authDelete } from '../../api';
import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';
// Methods
import { register, login, logout, validateToken } from './session';

const User = {
  register: register,
  login: login,
  logout: logout,
  validateToken: validateToken,

  async getTest() {
    // Mutliple
    const response = await authGet(`/projects`);
    const data = await response.json().then(b => camelizeKeys(b));
//    const normalized = normalize(data, schema.blendTemplates);
    return data;
  },


  //////////////////////// BLEND TEMPLATE RELATED //////////////////////
 /* async createBlendTemplate(
    name?: string,
    observation?: string,
    items?: Item[],
  ) {
    const body = {
      name: name,
      type_name: 'blend',
      observation: observation,
      items: items,
      complete: false,
    };
    const response = await authPost(`/mixes/templates`, body);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.blendTemplate);
    return normalized;
  },

  
  async getBlendTemplate(id: number | string) {
    // Single
    const response = await authGet(`/mixes/templates/${id}`);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.blendTemplate);
    return normalized;
  },

  async updateBlendTemplate(
    blendId: number,
    name: ?string,
    observation: ?string,
    complete: ?boolean,
  ) {
    const body = {
      name: name,
      type_name: 'blend',
      observation: observation,
      complete: complete,
    };
    const response = await authPut(`/mixes/templates/${blendId}`, body);
    const data = await response.json().then(b => camelizeKeys(b));

    const normalized = normalize(data, schema.blendTemplate);
    return normalized;
  },

  async deleteBlendTemplate(templateId: number) {
    await authDelete(`/mixes/templates/${templateId}`);
  },

  //////////////////////// BLEND TEMPLATE ITEM RELATED //////////////////////

  async createBlendTemplateItem(
    blendId: number,
    itemId: number,
    quantity: number,
  ) {
    const body = {
      variant_id: itemId,
      quantity: quantity,
    };
    const response = await authPost(`/mixes/templates/${blendId}/items`, body);
    const data = await response.json().then(b => camelizeKeys(b));
    return data;
  },

  async getBlendTemplateItems(templateId: number) {
    const response = await authGet(`/mixes/items?by_template=${templateId}`);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.blendTemplateItems);
    return normalized;
  },

  async deleteBlendLineItem(itemId: number) {
    await authDelete(`/mixes/items/${itemId}`);
    return;
  },

  async updateBlendTemplateItem(itemId: number, quantity: number) {
    const body = {
      quantity,
    };
    const response = await authPut(`/mixes/items/${itemId}`, body);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.blendTemplateItem);
    return normalized;
  },

  //////////////////////// BLEND RELATED //////////////////////

  async getBlendsByOrderNumber(orderNumber: string) {
    const response = await authGet(`/mixes/mixes?by_order=${orderNumber}`);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.blends);
    return normalized;
  },

  // Creates a new blend associated to the given template and order number
  async createBlend(
    blendTemplateId: number,
    quantity?: number,
    orderNumber: string,
  ) {
    const body = {
      template_id: blendTemplateId,
      quantity: quantity,
      order_number: orderNumber,
    };
    const response = await authPost(`/mixes/mixes`, body);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.blend);
    return normalized;
  },

  // Deletes the blend. Server side this should also remove all line_items associated to the blend from the cart
  async deleteBlend(blendId: number) {
    await authDelete(`/mixes/mixes/${blendId}`);
    return;
  },

  async updateBlend(blendId: number, quantity: number) {
    const body = {
      quantity: quantity,
    };
    const response = await authPut(`/mixes/mixes/${blendId}`, body);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.blend);
    return normalized;
  },*/
};

export default User;
