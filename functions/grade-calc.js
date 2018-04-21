let gradeCalc = function(studentScore, totalScore) {
    const grade = studentScore/totalScore * 100;
    let letterGrade = '';
    if(grade >= 90) {
        letterGrade = 'A';
    } else if (grade >= 80) {
        letterGrade = 'B';
    } else if (grade >= 70) {
        letterGrade = 'C';
    } else if (grade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `You got a ${letterGrade} (${grade}%).`;
}

console.log(gradeCalc(75, 100));
console.log(gradeCalc(15, 20));
console.log(gradeCalc(92, 100));
console.log(gradeCalc(82, 100));
console.log(gradeCalc(72, 100));
console.log(gradeCalc(62, 100));
console.log(gradeCalc(32, 100));