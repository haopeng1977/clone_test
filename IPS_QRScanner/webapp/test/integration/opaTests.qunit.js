/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"QRScanner/IPS_QRScanner/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});