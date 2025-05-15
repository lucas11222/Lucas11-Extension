document.getElementById('addInput').onclick = function () {
    const container = document.getElementById('input-container');

    const plus = document.createElement('p');
    plus.className = 'pcenter';
    plus.textContent = '+';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'sum-input';

    container.appendChild(plus);
    container.appendChild(input);
  };

  document.getElementById('calcstringbuttonsubmit').onclick = function () {
    const inputs = document.querySelectorAll('.sum-input');
    let sum = 0;
    let valid = true;

    inputs.forEach(input => {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        sum += value;
      } else {
        valid = false;
      }
    });
    if (value === "Hello world!") {
        window.location.href = "https://www.helloworld.org/";
    }
    if (value === "congreation jumpscare") {
        window.location.href = "https://youtu.be/k3ebBTBeUTg?t=97";
    }
    if (value === "elephant green screen effect") {
        window.location.href = "https://www.youtube.com/watch?v=Z_Ik77To2T0";
    }
    if (valid) {
      document.getElementById("resultcalcstring").innerText = sum;
    } else {
      document.getElementById("resultcalcstring").innerText = "NaN";
      alert("Please put valid charaters.")
    }
  };