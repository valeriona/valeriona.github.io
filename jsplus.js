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



//JavaScript File
//Note: only supports strings inside arrays
//E.g. save(["hello","world"],"name1")
//E.g. load("name1")
var jsf1 = {
	save: function(data,name) {
    	var storage = localStorage.jsfStorage.split("JSFSTORAGE")
		var storageNames = localStorage.jsfStorageNames.split("JSFSTORAGE")
		var newStorage = ""
		var newData = "JSFPLACEHOLDER"
		var i = 0
		while(i < data.length) {
			newData += "JSF_STORAGE" + data[i]
			i += 1
		}
		if(storageNames.indexOf(name) == -1) {
			localStorage.jsfStorage += "JSFSTORAGE" + newData
			localStorage.jsfStorageNames += "JSFSTORAGE" + name
			console.log("Saving successful")
		}
		else {
			storage[storageNames.indexOf(name)] = newData
			i = 1
			localStorage.jsfStorage = "JSFPLACEHOLDER"
			console.log(localStorage.jsfStorage)
			while(i < storage.length) {
				localStorage.jsfStorage += "JSFSTORAGE" + storage[i]
				i += 1
			}
			console.log("Saving successful")
		}
    },
	load: function(name) {
    	var storage = localStorage.jsfStorage.split("JSFSTORAGE")
		var storageNames = localStorage.jsfStorageNames.split("JSFSTORAGE")
		var newStorage = ""
		var data = ""
		var newData = []
		if(storageNames.indexOf(name) != -1) {
			data = storage[storageNames.indexOf(name)]
			newData = data.split("JSF_STORAGE")
		}
		else {
			console.log("Error: file not found")
			return(undefined)
		}
		var newData2 = []
		var i = 1
		while(i < newData.length) {
			newData2.push(newData[i])
			i+=1
		}
		console.log("Loading successful")
		return(newData2)
    }
}

function jsf() {
	if(localStorage.getItem('jsfStorageNames') != null) {
		console.log("Storage successfuly loaded.")
	}
	else  {
		localStorage.jsfStorageNames = "JSFPLACEHOLDER"
	}

	if(localStorage.getItem('jsfStorage') != null) {
		console.log("Storage names successfuly loaded.")
	}
	else  {
		localStorage.jsfStorage = "JSFPLACEHOLDER"
	}
	return(jsf1)
}
