var file =require('fs');

file.appendFile('myfile.txt','this is my text',function(err){
	if(err) throw err;
	console.log("saved");

});

file.writeFile('myfile.txt','this is not my file',function(err){
	if(err) throw err;
	console.log("Edited");
});

file.open('myfile.txt','w',function(err,fs){
	if(err) throw err;
	console.log("Opened");
});

file.unlink('myfile.txt',function(err,fs){
	if(err) throw err;
	console.log("Deleted");
});
