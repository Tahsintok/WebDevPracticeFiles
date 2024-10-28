

let currentTime = document.querySelector("#myClock")
let fullName = document.querySelector("#myName")

// Function to display the full name in the myName element
function writingName() {
    let inputName  = prompt("Please, Enter your Name :")
    let inputSurname = prompt("Please, Enter your Surname :")  
    fullName.innerHTML =` ${inputName} ${inputSurname} `
}
writingName()


// Function to get the current time and day of the week,display it in the 'myClock' element
function showTimeAndDay(){
    let now = new Date().toLocaleTimeString() //get current time
    let daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let today= new Date().getDay()
    let dayName = daysofWeek[today]

    // Display both time and day in the same element
    currentTime.innerHTML = `${now}, ${dayName}`;
}
showTimeAndDay()

//run every 1000 miliseconds showTime function
setInterval(showTimeAndDay, 1000);
