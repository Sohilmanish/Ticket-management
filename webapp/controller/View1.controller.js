sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    
],
function (Controller,JSONModel,Fragment,Filter,FilterOperator) {
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
                  }
           ]

            let oModel= new JSONModel()
            oModel.setData(oData)
            this.getView().setModel(oModel,"P")
            
        },
         
        onValueHelpRequestTicket: function (oEvent) {
          var sInputValue = oEvent.getSource().getValue(),
            oView = this.getView();
    
          if (!this._pValueHelpDialog1) {
            this._pValueHelpDialog1 = Fragment.load({
              id: oView.getId(),
              name: "com.manish.ticketmanagement.view.TicketId",
              controller: this
            }).then(function (oDialog) {
              oView.addDependent(oDialog);
              return oDialog;
            });
          }

          this._pValueHelpDialog1.then(function(oDialog) {
            // Create a filter for the binding
            // oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
            // Open ValueHelpDialog filtered by the input's value
            oDialog.open(sInputValue);
          });
        },
        
        onValueHelpRequestAssignedTo: function (oEvent) {
          var sInputValue = oEvent.getSource().getValue(),
            oView = this.getView();
    
          if (!this._pValueHelpDialog) {
            this._pValueHelpDialog = Fragment.load({
              id: oView.getId(),
              name: "com.manish.ticketmanagement.view.assignedTo",
              controller: this
            }).then(function (oDialog) {
              oView.addDependent(oDialog);
              return oDialog;
            }); 
          }
          this._pValueHelpDialog.then(function(oDialog) {
            // Create a filter for the binding
            // oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
            // Open ValueHelpDialog filtered by the input's value
            oDialog.open(sInputValue);
          });
        },

        onValueHelpCloseTicket: function (oEvent) {
          var oSelectedItem = oEvent.getParameter("selectedItem");
          oEvent.getSource().getBinding("items").filter([]);
    
          if (!oSelectedItem) {
            return;
          }
          this.byId("TicketID").setValue(oSelectedItem.getTitle());
        },

        onValueHelpCloseAssignedTo: function (oEvent) {
          var oSelectedItem = oEvent.getParameter("selectedItem");
          oEvent.getSource().getBinding("items").filter([]);
    
          if (!oSelectedItem) {
            return;
          }
          this.byId("AssignedTo").setValue(oSelectedItem.getTitle());
        },

        onSearch: function () {
          var aTableFilters = this.byId("filterbar").getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
            var oControl = oFilterGroupItem.getControl(),
              aSelectedKeys = oControl.getSelectedKeys(),
              aFilters = aSelectedKeys.map(function (sSelectedKey) {
                return new Filter({
                  path: oFilterGroupItem.getName(),
                  operator: FilterOperator.Contains,
                  value1: sSelectedKey
                });
              });
    
            if (aSelectedKeys.length > 0) {
              aResult.push(new Filter({
                filters: aFilters,
                and: false
              }));
            }
    
            return aResult;
          }, []);
    
          this.oTable.getBinding("items").filter(aTableFilters);
          this.oTable.setShowOverlay(false);
        },

        getFiltersWithValues: function () {
          var aFiltersWithValue = this.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
            var oControl = oFilterGroupItem.getControl();
    
            if (oControl && oControl.getSelectedKeys && oControl.getSelectedKeys().length > 0) {
              aResult.push(oFilterGroupItem);
            }
    
            return aResult;
          }, []);
    
          return aFiltersWithValue;
        },

        applyData: function (aData) {
          aData.forEach(function (oDataObject) {
            var oControl = this.oFilterBar.determineControlByName(oDataObject.fieldName, oDataObject.groupName);
            oControl.setSelectedKeys(oDataObject.fieldData);
          }, this);
        },
        

    });
});


