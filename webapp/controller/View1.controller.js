sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/syncStyleClass"
],
function (Controller,JSONModel,syncStyleClass) {
    "use strict";

    return Controller.extend("com.manish.ticketmanagement.controller.View1", {
        onInit: function () {
           let oData =[
            {
              "Status" : "yes",
              "TicketID": 1,
              "CreationDate" : "27 May 2024",
              "CreatedBy" : "Satya Sir",
              "Priority" : 1,
              "AssignedTo" : "Aricord consulting Limited"
            },
             
            {
                "Status" : "No",
                "TicketID": 2,
                "CreationDate" : "28 May 2024",
                "CreatedBy" : "Puran Sir",
                "Priority" : 2,
                "AssignedTo" : "Aricord consulting Limited"
              },
              {
                "Status" : "yes",
                "TicketID": 3,
                "CreationDate" : "27 May 2024",
                "CreatedBy" : "Tushar Sir",
                "Priority" : 3,
                "AssignedTo" : "Deloitte consulting Limited"
              },
              {
                "Status" : "yes",
                "TicketID": 4,
                "CreationDate" : "27 May 2024",
                "CreatedBy" : "Manish khatik",
                "Priority" :4,
                "AssignedTo" : "Deloitte consulting Limited"
              },
              {
                "Status" : "No",
                "TicketID": 5,
                "CreationDate" : "27 May 2024",
                "CreatedBy" : "lokendra Sir",
                "Priority" :5,
                "AssignedTo" : "Deloitte consulting Limited"
              },
              {
                "Status" : "No",
                "TicketID": 6,
                "CreationDate" : "27 May 2024",
                "CreatedBy" : "Abhinav Sir",
                "Priority" :6,
                "AssignedTo" : "Deloitte consulting Limited"
              },
              {
                "Status" : "yes",
                "TicketID": 7,
                "CreationDate" : "27 May 2024",
                "CreatedBy" : "Satya Sir",
                "Priority" : 7,
                "AssignedTo" : "Aricord consulting Limited"
              },
               
              {
                  "Status" : "No",
                  "TicketID": 8,
                  "CreationDate" : "28 May 2024",
                  "CreatedBy" : "Puran Sir",
                  "Priority" : 8,
                  "AssignedTo" : "Aricord consulting Limited"
                },
                {
                  "Status" : "no",
                  "TicketID": 9,
                  "CreationDate" : "27 May 2024",
                  "CreatedBy" : "Tushar Sir",
                  "Priority" : 9,
                  "AssignedTo" : "Deloitte consulting Limited"
                },
                {
                  "Status" : "yes",
                  "TicketID": 10,
                  "CreationDate" : "27 May 2024",
                  "CreatedBy" : "Manish khatik",
                  "Priority" :10,
                  "AssignedTo" : "Deloitte consulting Limited"
                },
                {
                  "Status" : "yes",
                  "TicketID": 11,
                  "CreationDate" : "27 May 2024",
                  "CreatedBy" : "lokendra Sir",
                  "Priority" :11,
                  "AssignedTo" : "Deloitte consulting Limited"
                },
                {
                  "Status" : "yes",
                  "TicketID": 12,
                  "CreationDate" : "27 May 2024",
                  "CreatedBy" : "Satya Sir",
                  "Priority" : 12,
                  "AssignedTo" : "Aricord consulting Limited"
                },
                 
                {
                    "Status" : "No",
                    "TicketID": 13,
                    "CreationDate" : "28 May 2024",
                    "CreatedBy" : "Puran Sir",
                    "Priority" : 13,
                    "AssignedTo" : "Aricord consulting Limited"
                  },
                  {
                    "Status" : "yes",
                    "TicketID": 14,
                    "CreationDate" : "27 May 2024",
                    "CreatedBy" : "Tushar Sir",
                    "Priority" : 14,
                    "AssignedTo" : "Deloitte consulting Limited"
                  },
                  {
                    "Status" : "yes",
                    "TicketID": 15,
                    "CreationDate" : "27 May 2024",
                    "CreatedBy" : "Manish khatik",
                    "Priority" :15,
                    "AssignedTo" : "Deloitte consulting Limited"
                  },
                  {
                    "Status" : "yes",
                    "TicketID":16,
                    "CreationDate" : "27 May 2024",
                    "CreatedBy" : "lokendra Sir",
                    "Priority" :16,
                    "AssignedTo" : "Deloitte consulting Limited"
                  },
           ]
            let this=that
            let oModel= new JSONModel()
            oModel.setData(oData)
            that.getView().byId("Idtable").setModel(oModel,"P")
        },

        onSave: function () {
          if (!this.pDialog) {
            this.pDialog = this.loadFragment({
              name: "sap.training.exc.view.Dialog"
            }).then(function (oDialog) {
              syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
              return oDialog;
            }.bind(this));
          }
          this.pDialog.then(function (oDialog) {
            oDialog.open();
          });
        },
        
        onCloseDialog: function () {
          this.byId("dialog").close();
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


