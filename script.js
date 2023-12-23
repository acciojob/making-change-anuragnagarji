const makeChange = (c) => {
//let notes=new Array(4).fill(0);
let notes={
	q:0,
	d: 0,
	n:0,
	p:0
};
	notes["q"]=change(c,25);
	c=c-25*notes["q"];
	notes["d"]=change(c,10);
	c=c-10*notes["d"];
	notes["n"]=change(c,5);
	c=c-5*notes["n"];
	notes["p"]=change(c,1);
	return notes;
	//console.log(notes);
};

function change(value,note) {
 if(value>note){
	return Math.floor(value/note);
	 
 }
	else return 0;
}

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(Number(c))));
