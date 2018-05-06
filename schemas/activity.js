/*
    Javascript ActivityPub Software
    Copyright (C) 2018 Gregory Sartucci
    License: AGPL-3.0, Check file LICENSE
*/

var activityTypes = ['Create', 'Update', 'Delete', 'Follow', 'Unfollow'];

var activity = new SimpleSchema({
    id: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    actor: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    type: {
        type: String,
        allowedValues: activityTypes
    },
    object: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    }
});
