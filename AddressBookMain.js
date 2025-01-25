var AddressBookMain = /** @class */ (function () {
    function AddressBookMain() {
        this.displayWelcomeMessage();
    }
    AddressBookMain.prototype.displayWelcomeMessage = function () {
        console.log("Hi User , Welcome to Address Book system..!");
    };
    return AddressBookMain;
}());
new AddressBookMain();
