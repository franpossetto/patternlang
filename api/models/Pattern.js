/**
 * Pattern.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	name: {
  		type: 'string'
  	},

  	number: {
  		type: 'number'
  	},

  	problem: {
  		type: 'string'
  	},

  	solution: {
  		type: 'string'
  	},

  	body: {
  		type: 'string'
  	},

  	degreeOfFaith: {
  		type: 'string',
  		enum: ['One Star', 'Two Stars', 'Three Stars'],
  		defaultsTo: 0
  	},

  	scale: {
  		type: "string",
  		enum: ["Town", "Building", "Construction"],
  		defaultsTo: "Building"
  	},

  	

  	//isConnectedTo: {
  	//	type: 'number'
  	//},

  	//isConnectedBy: {
  	//	type: 'number'
  	//},

  	//inverseProperty: Si una propiedad linkea 'a' con 'b' su propiedad inversa linkeara 'b' con 'a'. Por ejemplo, la propiedad hasParent y su inversa hasChild. Si Matthew hasParent Jane, then Jane hasChild Matthew. 
  }
};

