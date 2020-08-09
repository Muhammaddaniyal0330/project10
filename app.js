function check() {
    var score = 0;
    var right_awnser_10 = document.getElementById('q1-ans1');
    if (right_awnser_10.checked == true) {
        score++
    }
    var right_awnser_20 = document.getElementById('q2-ans2');
    if (right_awnser_20.checked == true) {
        score++
    }
    var right_awnser_30 = document.getElementById('q3-ans3');
    if (right_awnser_30.checked == true) {
        score++
    }
    var right_awnser_40 = document.getElementById('q4-ans1');
    if (right_awnser_40.checked == true) {
        score++
    }
    var right_awnser_50 = document.getElementById('q5-ans3');
    if (right_awnser_50.checked == true) {
        score++
    }
    alert("Your Score is "+ score);
}
