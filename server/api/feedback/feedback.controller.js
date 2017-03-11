'use strict';

const _ = require('lodash');
const errors = require('rest-api-errors');
const http = require('tiny-json-http');
const url = process.env.SLACK_URL;

exports.create = function (req, resp, next) {

    http.post({
        url: url,
        data: {
            attachments: [
                {
                    fallback: req.body.message,
                    pretext: "We Got Feedback!!!",
                    fields: [{
                        title: 'Name',
                        value: req.body.name
                    }, {
                        title: 'Email',
                        value: req.body.email
                    }, {
                        title: 'Feedback',
                        value: req.body.message
                    }]
                }
            ]
        }
    }, (e, r) => {
        if(e) {
            resp.status(500).end();
        }
        resp.status(200).end();
    })
};
