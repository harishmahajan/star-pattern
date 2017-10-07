var pat = "";

function startPattern(n) {
	
	for(var i=1;i<=n;i++){
		for(var j=1;j<=i;j++)
		{
			pat = pat + "*";
		}
		pat = pat + "\r\n";
	}
	return "Star Pattern: \r\n" + pat;
}

module.exports = startPattern;
//startPattern.helloWorld = helloWorld;