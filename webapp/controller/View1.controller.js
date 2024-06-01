sap.ui.define([
    "sap/ui/table/RowSettings",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("com.manish.ticketmanagement.controller.View1", {
        onInit: function () {
           let oData =[
            {
              "Status" : "yes",
              "Ticket ID": 1,
              "Creation Date" : "27 May 2024",
              "Created By" : "Satya Sir",
              "Priority" : "idk",
              "Assigned To" : "Deloitte consulting Limited"
            },
             
            {
                "Status" : "NO",
                "TicketID": 2,
                "CreationDate" : "28 May 2024",
                "CreatedBy" : "Puran Sir",
                "Priority" : "idk",
                "AssignedTo" : "Aricord consulting Limited"
              },
              {
                "Status" : "yes",
                "Ticket ID": 3,
                "Creation Date" : "27 May 2024",
                "Created By" : "Tushar Sir",
                "Priority" : "idk",
                "Assigned To" : "Deloitte consulting Limited"
              },
              {
                "Status" : "yes",
                "Ticket ID": 4,
                "Creation Date" : "27 May 2024",
                "Created By" : "Manish khatik",
                "Priority" : "idk",
                "Assigned To" : "Deloitte consulting Limited"
              },
              {
                "Status" : "yes",
                "Ticket ID": 5,
                "Creation Date" : "27 May 2024",
                "Created By" : "lokendra Sir",
                "Priority" : "idk",
                "Assigned To" : "Deloitte consulting Limited"
              },
              {
                "Status" : "yes",
                "Ticket ID": 6,
                "Creation Date" : "27 May 2024",
                "Created By" : "Abhinav Sir",
                "Priority" : "idk",
                "Assigned To" : "Deloitte consulting Limited"
              }
           ]

            let oModel= new sap.ui.model.JSONModel()
            oModel.setData(oData)
            this.getView().byId("table").setModel(oModel,"P")
        }


      //   onValueHelpRequest: function (oEvent) {
			// var sInputValue = oEvent.getSource().getValue(),
			// 	oView = this.getView();

			// if (!this._pValueHelpDialog) {
			// 	this._pValueHelpDialog = Fragment.load({
			// 		id: oView.getId(),
			// 		name: "sap.m.sample.InputAssisted.ValueHelpDialog",
			// 		controller: this
			// 	}).then(function (oDialog) {
			// 		oView.addDependent(oDialog);
			// 		return oDialog;
			// 	});
			// }
			// this._pValueHelpDialog.then(function(oDialog) {
			// 	// Create a filter for the binding
			// 	oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
			// 	// Open ValueHelpDialog filtered by the input's value
			// 	oDialog.open(sInputValue);
		// 	});
		// },

    });
});


