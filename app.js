window.onload = function() {
	let but1 = document.getElementById('1');
	let but2 = document.getElementById('2');
	let but3 = document.getElementById('3');
	let output1 = document.getElementById('output1');
	let output2 = document.getElementById('output2');
	let output3 = document.getElementById('output3');
////////////////////////////////////////////////////////////////////////////////////////
    //Действие кнопки 1
	but1.onclick = () => {
		(async () => {
			output1.innerHTML = '';
			output2.innerHTML = '';
			output3.innerHTML = '';
			let res = await ticket();//функция выводит инфомайшен после нажатия кнопки			
			output1.innerHTML += 'Информация о билете: <br>';					
			for(var prop in res) { //вывод инфомейшен по билету
				output1.innerHTML += prop + ': ' + res[prop] + ' <br>';
			}
		})();		
    }
////////////////////////////////////////////////////////////////////////////////////////    
    //Действие кнопки 2
	but2.onclick = () => {
		(async () => {
			let res = await hotel();//функция выводит инфомайшен после нажатия кнопки	
			output2.innerHTML += 'Информация о гостинице: <br>';	
			for(var prop in res) { //вывод инф по гостинице
				output2.innerHTML += prop + ': ' + res[prop] + ' </br>';
			}
		})();
    }
////////////////////////////////////////////////////////////////////////////////////////    
    //Действие кнопки 3
	but3.onclick = () => {
		(async () => {
			let res = await visa();//функция выводит инфомайшен после нажатия кнопки	
			output3.innerHTML += 'Информация о получении визы: <br>';
			for(var prop in res) {//вывод инф по визе
				output3.innerHTML += prop + ': ' + res[prop] + ' <br>';
            }
		})();
	}
}
//////////////////////////////////////////////////////////////////////
//билет
async function ticket() {  
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let s1 = document.getElementById('s1');
			let s2 = document.getElementById('s2');
			let s3 = document.getElementById('s3');
			let city = s1.options[s1.selectedIndex].text;
			let date = s2.options[s2.selectedIndex].text;
			let qual = s3.options[s3.selectedIndex].text;
			resolve(
			{ 'Город': city, 'Дата': date, 'Класс': qual}
			);
		}, 500);
	});					
}
////////////////////////////////////////////////////////////////
//отель
async function hotel() {  
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let s4 = document.getElementById('s4');
			let s5 = document.getElementById('s5');
			let hotel = s4.options[s4.selectedIndex].text;
			let room = s5.options[s5.selectedIndex].text;
			resolve(
				{ 'Отель': hotel, 'Номер': room,}
				);
		}, 500);
	});
}
////////////////////////////////////////////////////////////////////
//виза
async function visa() {  
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let random = Math.floor(Math.random()*100) + 1;
			resolve(
				{ 'Срок ожидания визы в сутках': random}
				);
		}, 500);
	});
}