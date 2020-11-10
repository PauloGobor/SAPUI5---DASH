sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

	//		"sap/ui/model/odata/ODataModel ",
	//		"sap.ui.model.odata.ODataUtils",  OData, ODataUtils
], function (Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("DashVoos.ProjetVoosDash.controller.Details", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf DashVoos.ProjetVoosDash.view.Details
		 */
		onInit: function () {
			var e = sap.ui.core.UIComponent.getRouterFor(this);
			e.getRoute("Details").attachMatched(this._onRoute, this);
			//console.log(e);
		},
		_onRoute: function (e) {
			jQuery.sap.require("sap.ui.model.odata.ODataUtils");
			var t = e.getParameter("arguments");
			var n = this.getView();
			var l = "" + t.Flightdate;
			var valdfrom_edit = encodeURIComponent(sap.ui.model.odata.ODataUtils.formatValue((l), "Edm.DateTime"));
			//	var i = valdfrom_edit.slice(9,-1);
			console.log(valdfrom_edit);
			var o = "/sflightSet(Flightcode='" + t.Flightcode + "',Flightdate=" + valdfrom_edit + ")";

			n.bindElement({
				path: o,
				parameters: {
					expand: "HeadToDetailsNav"
				},
				events: {
					dataRequested: function () {
						n.setBusy(true);
					},
					dataReceived: function () {
						n.setBusy(false);
					}
				}
			});

			//=====================================================================================================================================
			//=====================================================================================================================================
			//=====================================================================================================================================
			var oView = this.getView();
			var oChart = oView.byId("oVizFrame1");
		//	var o2 = "/sflight_chartSet(Flightcode='" + t.Flightcode + "',Flightdate=" + valdfrom_edit + ")";
			var oFilter1 = [];
			var oFilter = [];

			oFilter.push(new Filter("Flightcode", sap.ui.model.FilterOperator.EQ, t.Flightcode));
			oFilter1.push(new Filter("Flightdate", sap.ui.model.FilterOperator.BT, t.Flightdate));

			var oFilters2 = new sap.ui.model.Filter({
				and: true,
				filters: [
					new sap.ui.model.Filter({
						and: true,
						filters: [
							new sap.ui.model.Filter("Flightcode", FilterOperator.EQ, t.Flightcode),
							new sap.ui.model.Filter("Flightdate", FilterOperator.EQ, t.Flightdate)
						]
					})
				]
			});

			var sUrl = "/sap/opu/odata/sap/ZNEW_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			oChart.setModel(oModel);
			oChart.getDataset().getBinding("data").filter([oFilters2]);
		//	oChart.setDataset(dataset);

			oChart.setVizType('column');
			//=====================================================================================================================================
			//=====================================================================================================================================
		},

		onNavBack: function () {
			var e = sap.ui.core.UIComponent.getRouterFor(this);
			e.navTo("Voos", {}, false);
		},
		_onBindingChange: function (oEvent) {

			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf DashVoos.ProjetVoosDash.view.Details
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		//----------------------------------------------------------------------------------------------
		//	var res = encodeURIComponent(l);

		//	var valdfrom_edit = sap.ui.model.odata.ODataUtils.formatValue((l), "Edm.DateTime");

		//		    var k =  oData.formatValue(t.Flightdate , "Edm.DateTime");
		//	var u = new Date(valdfrom_edit).getTime();
		//----------------------------------------------------------------------------------------------
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf DashVoos.ProjetVoosDash.view.Details
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf DashVoos.ProjetVoosDash.view.Details
		 */
		//	onExit: function() {
		//
		//	}
		/*	var dataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				axis: 1,
				name: "country",
				value: "{Businessoccupiedseats}"
			}],
			measures: [{

				name: 'population',
				value: "{FlightCode}"

			}],
			data: {
				path: o2
			}

		});
		oViz.setDataset(dataset);
			
		console.log(oViz);

		/*	n2.setChartBindingPath({
				path: o2,
				events: {
					dataRequested: function () {
						n.setBusy(true);
					},
					dataReceived: function () {
						n.setBusy(false);
					}
				}
			});
			
			
				oChart.bindElement({
				path: o,
				parameters: {
					expand: "HeadToDetailsNav"
				},
				events: {
					dataRequested: function () {
						n.setBusy(true);
					},
					dataReceived: function () {
						n.setBusy(false);
					}
				}
			});*/

	});

});



	// //=====================================================================================================================================
	// 		//=====================================================================================================================================
	// 		//=====================================================================================================================================
	// 		var oView = this.getView();
	// 		var oChart = oView.byId("oVizFrame1");
	// 		var o2 = "/sflight_chartSet(Flightcode='" + t.Flightcode + "',Flightdate=" + valdfrom_edit + ")";
	// 		//	var oChart2 = oView.byId("oVizFrame1");

	// 		var oFilter1 = [];
	// 		var oFilter = [];

	// 		oFilter.push(new Filter("Flightcode", sap.ui.model.FilterOperator.EQ, t.Flightcode));
	// 		oFilter1.push(new Filter("Flightdate", sap.ui.model.FilterOperator.BT, t.Flightdate));
	// 		//	var comFil = new sap.ui.model.Filter([oFilter, oFilter1]);
	// 		//var today = new Date();
	// 		//	console.log(today);
	// 		var oFilters2 = new sap.ui.model.Filter({
	// 			and: true,
	// 			filters: [
	// 				new sap.ui.model.Filter({
	// 					and: true,
	// 					filters: [
	// 						new sap.ui.model.Filter("Flightcode", FilterOperator.EQ, t.Flightcode),
	// 						new sap.ui.model.Filter("Flightdate", FilterOperator.EQ, t.Flightdate)
	// 					]
	// 				})
	// 			]
	// 		});
	// 		//binding.filter(oFilter);
	// 		//var oModel = new sap.ui.model.json.JSONModel();
	// 		//	oChart.getDataset().getBinding("data").filter(oFilters2);
	// 		//	console.log(oChart.getDataset().getBinding("data"));
	// 		//oChart.removeAllFeeds();
	// 		var dataset = new sap.viz.ui5.data.FlattenedDataset({
	// 			// dimensions: [{
	// 			// 	name: 'Flightode',
	// 			// 	value: "{HeadToDetailsNav/Flightode}"
	// 			// }],
	// 			// measures: [{
	// 			// 	name: 'Economy',
	// 			// 	value: '{HeadToDetailsNav/Economyoccupiedseats}'
	// 			// }, {
	// 			// 	name: 'Business',
	// 			// 	value: '{HeadToDetailsNav/Businessoccupiedseats}'
	// 			// }],
	// 			data: {
	// 				path: o2,
	// 				filters: [oFilters2]
	// 					/*	,
	// 						parameters: {// expand: "HeadToDetailsNav",
	// 							select: 'Flightcode,Flightdate'  
	// 						}*/
	// 			}
	// 		});
	// 		// var feedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
	// 		// 	'uid': "valueAxis",
	// 		// 	'type': "Measure",
	// 		// 	'values': ["Economy"]
	// 		// });
	// 		// var feedValueAxis2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
	// 		// 	'uid': "valueAxis",
	// 		// 	'type': "Measure",
	// 		// 	'values': ["Business"]
	// 		// });
	// 		// var feedCategoryAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
	// 		// 	'uid': "categoryAxis",
	// 		// 	'type': "Dimension",
	// 		// 	'values': ["Flightode"]
	// 		// });
	// 		//	oChart.getDataset().getBinding("data").filter(oFilters2);
	// 		//binding.filter(oFilter);

	// 		//var oModel = new sap.ui.model.odata.ODataModel("/destinations/v4/abc/http/app.svc", oConfig);

	// 		var sUrl = "/sap/opu/odata/sap/ZNEW_SRV/";
	// 		var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	// 		oChart.setModel(oModel);
	// 		// try
	// 		oChart.getDataset().getBinding("data").filter([oFilters2]);
	// 	//	oChart.setDataset(dataset);

	// 	//	oChart.addFeed(feedValueAxis1);
	// 	//	oChart.addFeed(feedValueAxis2);
	// 	//	oChart.addFeed(feedCategoryAxis1);
	// 		oChart.setVizType('column');
	// 		//oChart.placeAt("data");  

	// 		//=====================================================================================================================================
	// 		//=====================================================================================================================================
	// 	},