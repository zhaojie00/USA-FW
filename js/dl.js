window.onload = function(){
	/*******************登录*********************/	
	var oBox2 =document.getElementById('inp-box2');
	var oInp2 = oBox2.getElementsByTagName('input');
	var oSup2 = oBox2.getElementsByClassName('sup');
	var oI2 = oBox2.getElementsByClassName('tixing');
	var arryan = ['082fd','p0d6j','bzbbd','bnp8d','tfzx2','2xb4v','4442r','68p6n','46nt2','68vvj'];
	var yzName = /^\w{1,30}/;
	var yzmima = /^\w{6,20}/;
	var yzyouxiang = /^\w+@\w+\.+([a-zA-Z0-9]{2,4})+$/;
	var yzshouji = /^(13[0-9]|15[012356789]|18[0-9]|17[678]|14[57])[0-9]{8}$/;
	var yzyan = /^[a-zA-Z0-9]+$/;
	
	var temps = 1;
	var arrnames = ['zhaojie'];
	var arrmima = ['1442051151'];

	var oSui = document.getElementById('yz');
	var oSrc = document.getElementById('yzm');
	var oSubmin = document.getElementById('submit');
	var a = parseInt(Math.random()*10);
	oSrc.src = 'img/yzm/'+a+'.gif';
	oSui.onclick = function(){
		var temp=parseInt(Math.random()*10);
		//console.log(temp);
		oSrc.src = 'img/yzm/'+temp+'.gif';
		a = temp;
		return a;
	}
	//console.log(a);


	yanzheng(oInp2[0],yzName,0);
	yanzheng(oInp2[1],yzmima,1);
	yanzheng(oInp2[2],yzyan,2);

	
	function yanzheng(element,yz,index){	

		element.onblur = function(c){

			var txt = this.value;
			var tex = this.placeholder;
			if(yz.test(txt)&&txt!==''){
				temps = 0;
				oSup2[index].style.color = 'green';
				if(index==0){
					if(txt!=arrnames[0]){
						oI2[index].innerHTML = '未找到该用户!';
						temps++;
					}else{
						temps = 0;
					}
				}else if(index==1){
					if(txt!=arrmima[0]){
						oI2[index].innerHTML = '密码错误!';
						temps++;
					}else{
						temps = 0;
					}
				}else if(index==2){
					if(txt!=arryan[a]){
						oI2[index].innerHTML = '验证码错误!';
						temps++;
					}else{
						temps = 0;
					}
				}
				console.log(a);
			}else{
				temps++;
				oSup2[index].style.color = 'red';
				if(txt==''){
					oI2[index].innerHTML = "内容不能为空!";
					if(index==2){
						oI2[index].innerHTML = '请填写验证码!';
					}
				}else if(index==0){
					oI2[index].innerHTML = '请正确填写用户名';
				}else if(index==1){
					oI2[index].innerHTML = '密码不正确!';
				}else if(index==2){
					oI2[index].innerHTML = '验证码不正确!';
				}		
			}

		}
		element.onfocus = function(){
			oI2[index].innerHTML = '';
		}
		return temps;
	}

	
	oSubmin.onclick = function(){
		if(temps==0){
			alert('恭喜你,注册成功!')
		}else{
			alert('请完整资料!')
		}
	}


}/*E window*/