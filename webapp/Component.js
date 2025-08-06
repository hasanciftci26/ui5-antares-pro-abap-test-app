sap.ui.define([
    "sap/ui/core/UIComponent",
    "test/ui5/antares/pro/employeeui/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("test.ui5.antares.pro.employeeui.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});