
window.onload = function(){

  var submitButton = document.querySelector('form div:last-child input');
  var inputColors = document.querySelectorAll('input');
  var body = document.querySelector('body');

  var currentdate = new Date(Date.now())
  var today = currentdate.getDay()

  document.querySelector('#today').innerText = currentdate;
  //sets current date
  var dayColors = {

  };

  // array of colors


  getDayColorsFromLocalStorage()
  //function to grab colors

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    //when submit, prevent default with function

    updateDayColors();

    setColors();

    addToLocalStorage();
  })

  function setColors(){
    var todaysColor = dayColors[today];
    body.style.backgroundColor = todaysColor;
  }

  function getDayColorsFromLocalStorage(){
    if (window.localStorage.colorData) {
      var colorData = JSON.parse(window.localStorage.colorData);
      var todaysColor = colorData[today];
      console.log(colorData);
      body.style.backgroundColor = todaysColor;
      for(var key in colorData){
        //$("#" + key).val(colorData[key]);
        document.getElementById(key).value = colorData[key];
      }
    }
  }

  function updateDayColors(){
    for (var i = 0; i < inputColors.length -1; i++) {
      var colorValue = inputColors[i].value;
      var day = inputColors[i].id
      dayColors[day] = colorValue;
    }
  }

  function addToLocalStorage(){
    data = JSON.stringify(dayColors);
    window.localStorage.colorData = data
  }

}
