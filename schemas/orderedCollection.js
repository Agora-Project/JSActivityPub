let orderedCollection = new SimpleSchema({
    id: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    totalItems: {
        type: Number,
        defaultValue: 0
    },
    orderedItems: {
        type: [String],
        regEx: SimpleSchema.RegEx.Url
    }
});
