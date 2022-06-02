document.getElementById('btn').addEventListener('click', function () {
  const prog = document.getElementById('prog').value;
  const math = document.getElementById('math').value;
  const phy = document.getElementById('phy').value;
  const comp = document.getElementById('comp').value;
  const resultSection = document.getElementById('result');

  if (prog >= 33 && math >= 33 && phy >= 33 && comp >= 33) {
    let grade = '';

    // total result
    const totalresult = parseFloat(prog) + parseFloat(math) + parseFloat(phy) + parseFloat(comp);

    // parcentage
    const parc = (totalresult / 400) * 100;

    if (parc >= 80 && parc <= 100) {
      grade = 'A+'
    }
    else if (parc >= 70 && parc <= 79) {
      grade = 'A'
    }
    else if (parc >= 60 && parc <= 69) {
      grade = 'A-'
    }

    else if (parc >= 60 && parc <= 69) {
      grade = 'B'
    }
    else if (parc >= 50 && parc <= 59) {
      grade = 'C'
    }
    else if (parc >= 40 && parc <= 49) {
      grade = 'D'
    }
    else if (parc >= 33 && parc <= 39) {
      grade = 'E'
    }

    // display result on UI
    document.getElementById('result').innerHTML = `Out of 400 your total  is ${totalresult} and parcentage is ${parc.toFixed(2)}%. <br> Your grade is ${grade}. You are Pass.  `
  }
  else {
    const fail = "Fail";
    resultSection.innerHTML = `You are ${fail}`;
  }
})


