/*
    Javascript ActivityPub Software
    Copyright (C) 2018 Gregory Sartucci
    License: AGPL-3.0, Check file LICENSE
*/

getActivityFromUrl = function(url) {
    return fetch(url, {
        headers: {Accept: 'application/ld+json; profile="https://www.w3.org/ns/activitystreams#"'}
    });
}
