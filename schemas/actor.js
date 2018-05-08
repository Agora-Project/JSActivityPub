/*
    Javascript ActivityPub Software
    Copyright (C) 2018 Gregory Sartucci
    License: AGPL-3.0, Check file LICENSE
*/

actorTypes = ['Application', 'Group', 'Organization', 'Person', 'Service'];

actor = new SimpleSchema({
    id: { //This users unique id. Can be used with activitypub to fetch their public data.
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        index: true,
        unique: true
    },
    url: { //This users web url. For opening their profile with a browser.
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    type: { //What does this actor represent?
        type: String,
        allowedValues: actorTypes,
        defaultValue: 'Person'
    },
    inbox: { //Activities coming in.
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    outbox: { //Activities going out.
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    featured: { //Featured, or pinned, posts.
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    following: { //Users that this one if following.
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    followers: { //Users that follow this one.
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    endPoints: { //For other places to get data from. Most commonly sharedInbox.
        type: Object,
        blackbox: true,
        optional: true
    },
    preferredUsername: { //Handle, or account name. For permanent reference.
        type: String,
        optional: true
    },
    name: {  //Display Name
        type: String,
        optional: true
    },
    summary: {  //Profile Text
        type: String,
        optional: true
    },
    icon: {  //Avatar
        type: Object,
        blackbox: true,
        optional: true
    },
    image: {  //Profile Background
        type: Object,
        blackbox: true,
        optional: true
    },
    manuallyApprovesFollowers: { //Is this a private account?
        type: Boolean,
        optional: true
    },
    publicKey: { //For encryption
        type: Object,
        blackbox: true,
        optional: true
    }
});
