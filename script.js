function shortcut(s1, s2) {
  // your code here
	let res1 = '';
	let res2 = '';
	let res = res1+res2;
	 if(s1.length==0 || s2.length==0){
		 return '';
	 }
	for(let i=0; i<s1.length; i++){
		res1 = s1[0];
	}
	for(let j=0; j<s2.length; j++){
		res2=s2[0];
	}
	return res;
	
}

 //Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
