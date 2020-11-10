/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"novo_spfli/novos_spli/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});