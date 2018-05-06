/*
    Javascript ActivityPub Software
    Copyright (C) 2018 Gregory Sartucci
    License: AGPL-3.0, Check file LICENSE
*/

var orderedCollection = new SimpleSchema({
    id: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    totalItems: {
        type: Number,
        defaultValue: 0
    },
    orderedItems: {
        type: [String],
        regEx: SimpleSchema.RegEx.Url
    }
});
