/*
    Javascript ActivityPub Software
    Copyright (C) 2018 Gregory Sartucci
    License: AGPL-3.0, Check file LICENSE
*/

Package.describe({
    name: 'agoraforum:activitypub',
    version: '0.0.1',
    summary: 'ActivityPub Library',
    git: 'https://github.com/Agora-Project/JSActivityPub',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    both = ['client', 'server'];

    Npm.depends({
        'simpl-schema': '1.1.0',
        'ajv': '6.5.0'
    });

    api.addFiles([
        'jsonSchemas.js',
        'activityRequest.js',
        'schemas/actor.js',
        'schemas/object.js'
    ], 'server');

    api.addFiles([
    ], both);

    api.use([
        'ecmascript',
        'timbrandin:fetch',
        'aldeed:collection2'
    ], 'server');

    api.addFiles([
    ], 'client');

    api.use([
    ], 'client');

    api.export([
        'getActivityFromUrl',
        'activityPubActorTypes',
        'activityPubActor',
        'activityPubObjectTypes',
        'activityPubObject',
        'activityPubSchemas'
    ]);
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('agoraforum:activitypub', ['client', 'server']);
});
