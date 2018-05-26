/*
    Javascript ActivityPub Software
    Copyright (C) 2018 Gregory Sartucci
    License: AGPL-3.0, Check file LICENSE
*/

activityPubActorTypes = ['Application', 'Group', 'Organization', 'Person', 'Service'];

activityPubContentTypes = ['Article', 'Audio', 'Document', 'Event', 'Image', 'Note', 'Page', 'Place', 'Profile', 'Relationship', 'Tombstone', 'Video'];

activityPubActivityTypes = ['Accept', 'Add', 'Announce', 'Arrive', 'Block', 'Create', 'Delete', 'Dislike', 'Flag', 'Follow', 'Ignore', 'Invite', 'Join',
    'Leave', 'Like', 'Listen', 'Move', 'Offer', 'Question', 'Reject', 'Read', 'Remove', 'TentativeReject', 'TentativeAccept', 'Travel', 'Undo', 'Update',
    'View']

class xActivityPubObject {
    constructor(type) {
        this['@context'] = "https://www.w3.org/ns/activitystreams";
        this.type = type;
        this.to = [];
        this.cc = [];
        this.bto = [];
        this.bcc = [];
        this.audience = [];
    }

    copyAddressingProperties(object) {
        if (object.to) this.to.concat(object.to);
        if (object.cc) this.cc.concat(object.cc);
        if (object.bto) this.bto.concat(object.bto);
        if (object.bcc) this.bcc.concat(object.bcc);
        if (object.audience) this.audience.concat(object.audience);
    }
}

class xActivityPubActivity extends xActivityPubObject {
    constructor(type, actor, object) {
        super(type);

        this.actor = actor;
        this.object = object;

        if (object instanceof Object) {
            this.copyAddressingProperties(object);
        }
    }
}

//workaround for failed exporting
ActivityPubObject = xActivityPubObject;
ActivityPubActivity = xActivityPubActivity;
