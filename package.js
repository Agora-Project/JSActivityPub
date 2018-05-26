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
        'ajv': '6.5.0'
    });

    api.addFiles([
        'lib/jsonSchemas.js',
        'lib/activityRequest.js'
    ], 'server');

    api.addFiles([
        'lib/types.js'
    ], both);

    api.use([
        'timbrandin:fetch'
    ], 'server');

    api.use([
        'ecmascript'
    ], both);

    api.addFiles([
    ], 'client');

    api.use([
    ], 'client');

    api.export([
        'getActivityFromUrl',
        'activityPubActorTypes',
        'activityPubContentTypes',
        'activityPubActivityTypes',
        'activityPubSchemas',
        'ActivityPubObject',
        'ActivityPubActivity'
    ]);
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('agoraforum:activitypub', ['client', 'server']);
});
