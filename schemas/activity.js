let activityTypes = ['Create', 'Update', 'Delete', 'Follow', 'Unfollow'];

let activity = new SimpleSchema({
    id: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    actor: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
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
