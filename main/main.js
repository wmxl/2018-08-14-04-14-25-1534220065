module.exports = function main(a) {
    console.log("Debug Info");
	var i=0;
	var str1='';
	var str2='';
	var str3='';
    for(i=0;i<a.length;i++)
    {	
    	if(a.charAt(i)==0){
    		str1=str1+'._.';
    		str2=str2+'|.|';
    		str3=str3+'|_|';
    	}
    	else if(a.charAt(i)==1){
    		str1=str1+'...';
    		str2=str2+'..|';
    		str3=str3+'..|';
    	}
    	else if(a.charAt(i)==2){
    		str1=str1+'._.';
    		str2=str2+'._|';
    		str3=str3+'|_.';
    	}
    	else if(a.charAt(i)==3){
    		str1=str1+'._.';
    		str2=str2+'._|';
    		str3=str3+'._|';
    	}
    	else if(a.charAt(i)==4){
    		str1=str1+'...';
    		str2=str2+'|_|';
    		str3=str3+'._|';
    	}
    	else if(a.charAt(i)==5){
    		str1=str1+'._.';
    		str2=str2+'|_.';
    		str3=str3+'._|';
    	}
    	else if(a.charAt(i)==6){
    		str1=str1+'._.';
    		str2=str2+'|_.';
    		str3=str3+'|_|';
    	}
    	else if(a.charAt(i)==7){
    		str1=str1+'._.';
    		str2=str2+'..|';
    		str3=str3+'..|';
    	}
    	else if(a.charAt(i)==8){
    		str1=str1+'._.';
    		str2=str2+'|_|';
    		str3=str3+'|_|';
    	}
    	else if(a.charAt(i)==9){
    		str1=str1+'._.';
    		str2=str2+'|_|';
    		str3=str3+'..|';
    	}
    	if(i!=a.length-1){
    		str1=str1+' ';
    		str2=str2+' ';
    		str3=str3+' ';
    	}
    	if(i==a.length-1){
    		str1=str1+'\n';
    		str2=str2+'\n';
    		str3=str3+'\n';
    	}	
    }
    return str1+str2+str3;
};