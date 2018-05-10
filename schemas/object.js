/*
    Javascript ActivityPub Software
    Copyright (C) 2018 Gregory Sartucci
    License: AGPL-3.0, Check file LICENSE
*/

import simplSchema from 'simpl-schema';

activityPubObjectTypes = ['Article', 'Audio', 'Document', 'Event', 'Image', 'Note', 'Page', 'Place', 'Profile', 'Relationship', 'Tombstone', 'Video'];

activityPubObject = new SimpleSchema({
    id: { //This objects unique id. Can be used with activitypub to fetch it if it's public.
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        index: true,
        unique: true
    },
    url: { //This objects web url. For biewing it with a browser.
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    type: { //What does this object represent?
        type: String,
        allowedValues: activityPubObjectTypes,
        defaultValue: 'Note'
    },
    attributedTo: { //The entity or entities responsible for creating this object. Might not necessarily even be an actor.
        type: simplSchema.oneOf(String, Object, [String], [Object]),
        blackbox: true,
        optional: true
    },
    published: { //The date this was published.
        type: Date,
        optional: true
    },
    updated: { //The date this was last updated.
        type: Date,
        optional: true
    },
    to: { //The primary entity or entities this object is intended for.
        type: [String]
    },
    cc: { //The secondary entity or entities this object is intended for.
        type: [String],
        optional: true
    },
    summary: {  //This objects summary. For most objects, means title or short description.
        type: String,
        optional: true
    },
    content: { //This objects primary content.
        type: String,
        optional: true
    },
    attachment: { //Any attachments the object might have. Usually images or other such files.
        type: [Object],
        optional: true,
        blackbox: true
    },
    inReplyTo: { //Another object that this object is addressing
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true,
        index: 1
    },
    replies: {
        type: [String],
        regEx: SimpleSchema.RegEx.Url,
        defaultValue: [],
        optional: true
    },
    sensitive: { //Whether or not this object should have it's content hidden behind it's summary.
        type: Boolean,
        optional: true
    },
    tag: { //An array of objects that are to be associated with this object.
        type: [Object],
        optional: true,
        blackbox: true
    },
    conversation: { //A string that identifies this object as part of a conversation for easier reference.
        type: String,
        optional: true
    }
});
