var dayNum;

dayNum = Math.floor(Math.random() * 3);
var elementTypes = ["div", "p", "span", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li"];

var writingOneOptions = ['DuoLingo - Mandarin', 'Hello Chinese(review words)', 'Mango - French(review)'];
var writingTwoOptions = ['Mango - Mandarin(review)', 'Hello Chinese(review sentences)', 'Mango - French(new)'];
var writingThreeOptions = ['Mango - Mandarin(new)', 'Hello Chinese(new)', 'Mango - Cantonese(review)'];
var writingFourOptions = ['Khan Academy - Math', 'Khan Academy - Math', 'Mango - Cantonese(new)'];

function setWritingSection(){
    dayNum = Math.floor(Math.random() * 3);
    document.getElementById('wr-1').innerHTML = writingOneOptions[dayNum];
    document.getElementById('wr-2').innerHTML = writingTwoOptions[dayNum];
    document.getElementById('wr-3').innerHTML = writingThreeOptions[dayNum];
    document.getElementById('wr-4').innerHTML = writingFourOptions[dayNum];

    if(dayNum === 2){
        var lastChild = statusAll[statusAll.length - 1];
        lastChild.style.display = "none";
        var secondLastChild = statusAll[statusAll.length - 2];
        secondLastChild.style.display = "none";
    }
}

setWritingSection();


function setFitnessSection(){

    var majorExercises = "1) Push &nbsp 2) Pull &nbsp 3) Legs+Abs &nbsp 4) Run &nbsp 5) Yoga";
    var minorExercises = "1) Neck &nbsp 2) Vacume &nbsp 3) Hang";
    
    var today = new Date();
    var dayOfWeek = today.getDate();

    var firstFit = "";
    var secondFit = "";

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        document.getElementById('fitness-1').innerHTML = majorExercises;
        document.getElementById('fitness-2').innerHTML = majorExercises;

        document.getElementById('personal-5').innerHTML = 'Eat 3 meals tighty around fitness.';
    } else {
        document.getElementById('fitness-1').innerHTML = majorExercises;
        document.getElementById('fitness-2').innerHTML = minorExercises;

        document.getElementById('personal-5').innerHTML = 'Eat 2 meals tightly around fitness.';
    }
}

setFitnessSection();


var statusAll = document.querySelectorAll('.status');

for(let i = 0; i < statusAll.length; i++){
    statusAll[i].addEventListener('click', () => {
        if(statusAll[i].innerHTML === "INCOMPLETE"){
            statusAll[i].innerHTML = "COMPLETE";
            statusAll[i].style.backgroundColor = "green"; 
        } else {
            statusAll[i].innerHTML = "INCOMPLETE";
            statusAll[i].style.backgroundColor = "red";
        }
    });
}



document.addEventListener('click', () => {
    var statusAllArray = [...statusAll];

    var totalCompleted = 0;
    var progress_tracker = document.getElementById('progress-tracker');

    for(let i = 0; i < statusAllArray.length; i++){
        
        if(statusAllArray[i].innerHTML === "COMPLETE"){
            totalCompleted++;
        }
    }

    if(totalCompleted===statusAllArray.length){
        progress_tracker.style.backgroundColor = 'green';
    } else {
        progress_tracker.style.backgroundColor = 'red';
    }
    

    var percentageProgress =  (totalCompleted / statusAllArray.length) * 100;
    percentageProgress = Math.round(percentageProgress);
    var percentageProgressStr = percentageProgress.toString();
    percentageProgressStr = `${percentageProgressStr}%`;
    progress_tracker.innerHTML = percentageProgressStr;
});






