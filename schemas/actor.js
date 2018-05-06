
let actor = new SimpleSchema({
    id: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    inbox: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    outbox: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    following: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    followers: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    icon: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    }
});
