function player(id, name) {
    return {
        id: ko.observable(id),
        name: ko.observable(name)
    };
}