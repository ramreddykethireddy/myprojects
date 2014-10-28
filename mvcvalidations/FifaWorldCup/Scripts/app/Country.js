function country(id, name) {
    return {
        id: ko.observable(id),
        name: ko.observable(name),
        players: ko.observableArray([]),
        isEdit: ko.observable(false)
    };
}