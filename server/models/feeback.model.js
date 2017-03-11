'use strict';

var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var FeebackSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    createdBy: String,
    lastModifiedBy: String
}, {
    collection: 'feebacks',
    versionKey: false,
    timestamps: {
        createdAt: 'createdDtm',
        updatedAt: 'lastModifiedDtm'
    }
});

module.exports = mongoose.model('Feeback', FeebackSchema);
