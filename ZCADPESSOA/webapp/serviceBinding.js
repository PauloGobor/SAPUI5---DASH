function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZTX_CAD_PESSOA_SRV_02/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}