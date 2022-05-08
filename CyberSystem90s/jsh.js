//JavaScript HTML
var jsh1 = {
	create: function(parentElement,element) {
    	var el = document.createElement(element)
        parentElement.append(el)
        return(el)
    }
}

function jsh() {
	return(jsh1)
}
