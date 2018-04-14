// let temp = 100

// if(temp >= 60 && temp <= 90) {
//     console.log('It is nice out.  Just put pants on! Jeeez')
// } else if(temp <= 0 || temp >=110) {
//     console.log('You can go out but I am taking all of your stuff when you don\'t make it back')
// } else {
//     console.log('Do watcha watcha watcha want')
// }

let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Get out!')
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Here is a menu for you and for you a blade of grass.')
} else {
    console.log('The special today is roasted Vegans!')
}