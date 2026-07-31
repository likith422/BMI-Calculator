function calculate(){
const n=name.value||"User";
const age=parseFloat(document.getElementById("age").value);
const g=document.getElementById("gender").value;
const w=parseFloat(document.getElementById("weight").value);
const h=parseFloat(document.getElementById("height").value);
const a=parseFloat(document.getElementById("activity").value);
if(!age||!w||!h){out.innerHTML="Please fill all required fields.";return;}
const hm=h/100;
const bmi=w/(hm*hm);
let cat="",cls="";
if(bmi<18.5){cat="Underweight";cls="warn";}
else if(bmi<25){cat="Normal Weight";cls="good";}
else if(bmi<30){cat="Overweight";cls="warn";}
else{cat="Obese";cls="bad";}
let bmr=g==="Male"?(10*w+6.25*h-5*age+5):(10*w+6.25*h-5*age-161);
let tdee=bmr*a;
let lose=tdee-500,maint=tdee,gain=tdee+500;
let tips="";
if(cat==="Underweight")tips="Increase healthy calorie intake and strength training.";
else if(cat==="Normal Weight")tips="Maintain a balanced diet and regular exercise.";
else if(cat==="Overweight")tips="Reduce sugary foods, exercise 30–45 min/day.";
else tips="Consult a healthcare professional for a personalized plan.";
out.innerHTML=`<h2>Hello ${n}</h2>
<p><b>BMI:</b> ${bmi.toFixed(2)}</p>
<p><b>Status:</b> <span class="${cls}">${cat}</span></p>
<p><b>BMR:</b> ${bmr.toFixed(0)} kcal/day</p>
<p><b>Daily Calories (TDEE):</b> ${tdee.toFixed(0)} kcal/day</p>
<hr>
<p><b>Weight Loss:</b> ${lose.toFixed(0)} kcal/day</p>
<p><b>Maintain Weight:</b> ${maint.toFixed(0)} kcal/day</p>
<p><b>Weight Gain:</b> ${gain.toFixed(0)} kcal/day</p>
<hr>
<p><b>Health Tips</b><br>${tips}</p>`;
}