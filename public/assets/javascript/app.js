$("#helpDescr").hide();
$("#projDescr").hide();
$("#panicDescr").hide();
$("#codeDescr").hide();

$("#helpRoom").hover(
	function() {
		$("#helpDescr").show();
	}, function() {
		$("#helpDescr").hide();
	});

$("#projectRoom").hover( 
	function() {
		$("#projDescr").show();
	}, function() {
		$("#projDescr").hide();
	});

$("#panicRoom").hover(
	function() {
		$("#panicDescr").show();
	}, function() {
		$("#panicDescr").hide();
	});

$("#coderConnections").hover(
	function() {
		$("#codeDescr").show();
	}, function() {
		$("#codeDescr").hide();
	});

