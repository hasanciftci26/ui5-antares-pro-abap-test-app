sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ui5/antares/pro/v2/entry/CreateEntry"
], (Controller, CreateEntry) => {
    "use strict";

    return Controller.extend("test.ui5.antares.pro.employeeui.controller.Homepage", {
        onInit: function () {
            
        },

        onCreateNewEmployee: function () {
            const entry = new CreateEntry({
                controller: this,
                entitySet: "EmployeeSet",
                formType: "SimpleForm",
                propertySettings: [{
                    name: "FirstName",
                    required: true
                }]
            });

            entry.run();
        }
    });
});