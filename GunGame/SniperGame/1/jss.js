
//JavaScript Style/CSS
var jss1 = {
	styling: function(element,styling) {
    	var i = 0
        while(i < styling.length) {
        	element.style[styling[i][0]] = styling[i][1]
            i += 1
        }
    }
}

function jss() {
	return(jss1)
}