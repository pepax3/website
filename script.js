window.onload = function(){
    document.getElementById("input").focus();
    const commands = ["about", "portfolio"];
    const output = document.getElementById("output");
    const input = document.getElementById("input");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        const command = input.value;
        input.value = "";
        if (commands.includes(command)) {
            if (command === "portfolio") {
                window.location.href = "portfolio.html";
            } else if (command === "about") {
                window.location.href = "about.html";
            }
        } else {
            output.innerHTML = "";
        }
      }
    });
  }
  