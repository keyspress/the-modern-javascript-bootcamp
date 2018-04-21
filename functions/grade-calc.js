let gradeCalc = function(studentScore, totalScore) {
    const grade = studentScore/totalScore * 100;
    if(grade >= 90) {
        return `You got an A (${grade}%).`;
    } else if (grade >= 80) {
        return `You got a B (${grade}%).`;
    } else if (grade >= 70) {
        return `You got a C (${grade}%).`;
    } else if (grade >= 60) {
        return `You got a D (${grade}%).`;
    } else {
        return `You got an F (${grade}%). You friggin loser!`
    }
}

console.log(gradeCalc(75, 100));
console.log(gradeCalc(15, 20));
console.log(gradeCalc(92, 100));
console.log(gradeCalc(82, 100));
console.log(gradeCalc(72, 100));
console.log(gradeCalc(62, 100));
console.log(gradeCalc(32, 100));