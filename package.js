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

    api.addFiles([
        'lib/types.js'
    ], both);

    api.use([
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
