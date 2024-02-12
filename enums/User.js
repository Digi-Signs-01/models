const userType = Object.freeze({
    devAdmin: "devAdmin",
    serviceAdmin: "serviceAdmin",
    servicePoc: "servicePoc",
    clientAdmin: "clientAdmin",
    client_user: "clientUser"
});

const activeStatus = Object.freeze({
    active: "active",
    inactive: "inactive",
});


module.exports = {
    userType,
    activeStatus,
}