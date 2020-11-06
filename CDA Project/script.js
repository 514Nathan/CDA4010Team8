


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    tab.classList.add('active');
    target.classList.add('active');
  })
})

function CriminalY(){
		document.getElementById('test').style.display = "block";
	
}
function CriminalN(){
		document.getElementById('test').style.display = "none";
	
}

function MilitaryY(){
		document.getElementById('military').style.display = "block";
	
}
function MilitaryN(){
		document.getElementById('military').style.display = "none";
	
}

function vehicleY(){
		document.getElementById('vehicle').style.display = "block";
	
}
function vehicleN(){
		document.getElementById('vehicle').style.display = "none";
	
}

Education = 1;

function addEducation(){
	
	ed = document.getElementById("Ed");
	
	

	add1 = document.createTextNode("School Name: ");
	
	add2 = document.createElement("input");
	add2.setAttribute("type","text");
	add2.setAttribute("id","Education" +(Education++));
	add2.setAttribute("required", "");
	
	add3 = document.createElement("p");


	ed.append(add1,add2,add3);
	
}





function Check(){
	
	
}