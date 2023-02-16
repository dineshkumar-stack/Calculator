
function clicking(event) {
    total = document.querySelector('.text-right')
    operator = ['-', '+', '/', '*']
    if (!(operator.includes(total.innerText.slice(-1)) && operator.includes(event.innerText)))
        total.innerText = total.innerText + event.innerText
    console.log(event);

}

const evaluate1 = () => {
    total = document.querySelector('.text-right')
    outputTotal = document.querySelector('.text-right')
    data = total.innerText
    var output = eval(data)
    outputTotal.innerText = output
    console.log(output);
}

clear = document.getElementById('clear');
const clean = () => {
    total = document.querySelector('.text-right')
    outputTotal = document.querySelector('.text-right')
    data = total.innerText
    var output = total.innerText = ""
    console.log(output);
}

// ---------------------Key-----------------------------------------

window.addEventListener('keydown', (event) => {
    total = document.querySelector('.text-right')
    operator = ['-', '+', '/', '*']
    key = event.key
    code = event.code

    if (code.includes("Digit") || operator.includes(key)&& (!operator.includes(total.innerText.slice(-1)) && !operator.includes(event.innerText))) {
        total = document.querySelector('.text-right')
        total.innerText = total.innerText + key
        // console.log(event);
    }
    else {
        console.log("error");
        console.log(event);
    }  
})

document.addEventListener("keydown", function(event) {
    if (event.code === "Backspace") {
      var text = document.querySelector(".text-right").innerText;
      text = text.substring(0, text.length - 1);
      document.querySelector(".text-right").innerText = text;
    }
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.code === "KeyC") {
      var text = document.querySelector(".text-right").innerText;
      text = "";
      document.querySelector(".text-right").innerText = text;
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === "Equal" || event.code === "NumpadEnter" ) {
        total = document.querySelector('.text-right').innerText
        outputTotal = document.querySelector('.text-right')
        var output = eval(total)
        document.querySelector(".text-right").innerText = output
        console.log(total);
    }
  });


