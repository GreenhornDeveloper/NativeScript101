let connectivity = require("connectivity");
let connectionType = connectivity.getConnectionType();
let diagModule = require("ui/dialogs");

switch (connectionType) {
    case connectivity.connectionType.none:
        console.log("No Wifi")
    break;
    case connectivity.connectionType.wifi:
        console.log("WiFi connection");
    break;
    case connectivity.connectionType.mobile:
        console.log("Mobile connection");
    break;
}
