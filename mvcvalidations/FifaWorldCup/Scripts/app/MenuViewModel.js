function MenuViewModel() {
    var self = this;
    self.menuitems = ko.observableArray([
        { name: 'Country List' },
        { name: 'Player List' }
    ]);
    self.menuClick = function (data, event) {
        if (data.name == "Player List") {
            $('#content').load("/Home/Player", function () {
                ko.applyBindings(countryViewModel, $('#content')[0]);
            });
        }
        else if (data.name == "Country List") {
            $('#content').load("/Home/Country", function () {
                ko.applyBindings(countryViewModel, $('#content')[0]);
            });
        }
    };
}