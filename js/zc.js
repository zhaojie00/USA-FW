window.onload = function(){
	/*******************注册*********************/
	var oBox =document.getElementById('inp-box');
	var oInp = oBox.getElementsByTagName('input');
	var oSup = oBox.getElementsByClassName('sup');
	var oI = oBox.getElementsByClassName('tixing');
	var arryan = ['082fd','p0d6j','bzbbd','bnp8d','tfzx2','2xb4v','4442r','68p6n','46nt2','68vvj'];
	var yzName = /^\w{1,30}/;
	var yzmima = /^\w{6,20}/;
	var yzyouxiang = /^\w+@\w+\.+([a-zA-Z0-9]{2,4})+$/;
	var yzshouji = /^(13[0-9]|15[012356789]|18[0-9]|17[678]|14[57])[0-9]{8}$/;
	var yzyan = /^[a-zA-Z0-9]+$/;
	var tempr = 1;

	//console.log(oInp);
	yanzheng(oInp[0],yzName,0);
	yanzheng(oInp[1],yzmima,1);
	yanzheng(oInp[2],yzmima,2);
	yanzheng(oInp[3],yzyouxiang,3);
	yanzheng(oInp[4],yzshouji,4);
	yanzheng(oInp[5],yzyan,5);


	function yanzheng(element,yz,index){
		
		element.onblur = function(){
			var txt = this.value;
			var tex = this.placeholder;
			if(yz.test(txt)&&txt!=''){
				tempr = 0;
				oSup[index].style.color = 'green';
				if(index==2&&oInp[2].value!=oInp[1].value){
					oI[index].innerHTML = '两次密码不一致!';
					tempr++;
				}else{
					tempr = 0;
				}
				if(index==5){
					if(txt!=arryan[a]){
						oI[index].innerHTML = '验证码错误!';
						tempr++;
					}else{
						tempr = 0;
					}
				}
				//console.log(a);
			}else{
				tempr++;
				oSup[index].style.color = 'red';
				if(txt==''){
					oI[index].innerHTML = "内容不能为空!";
					if(index==5){
						oI[index].innerHTML = '请填写验证码!';
					}
				}else if(index==0){
					oI[index].innerHTML = '请正确填写用户名';
				}else if(index==1){
					oI[index].innerHTML = tex;
				}else if(index==2){
					oI[index].innerHTML = '两次密码不一致!';
				}else if(index==3){
					oI[index].innerHTML = '请正确填写邮箱!';
				}else if(index==4){
					oI[index].innerHTML = '请正确填写手机号!';
				}				
			}

		}
		element.onfocus = function(){
			oI[index].innerHTML = '';
		}
		return tempr;
	}
	var oSui = document.getElementById('yz');
	var oSrc = document.getElementById('yzm');
	var oSubmin = document.getElementById('submit');
	var a = parseInt(Math.random()*10);
	var oCheck = document.getElementById('check');
	var pan = oCheck.checked;
	pan = false;
	oCheck.onclick = function(){
		pan = true;
	}
	//console.log(pan);
	oSrc.src = 'img/yzm/'+a+'.gif';
	oSui.onclick = function(){
		var temp=parseInt(Math.random()*10);
		//console.log(temp);
		oSrc.src = 'img/yzm/'+temp+'.gif';
		a = temp;
		return a;
	}
	oSubmin.onclick = function(){
		if(tempr==0&&pan){
			alert('恭喜你,注册成功!')
		}else{
			alert('请完整资料!')
		}
	}

}/*E window*/