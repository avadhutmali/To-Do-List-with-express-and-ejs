// module.exports.getDate = getDate;

// function getDate() {
//     var today = new Date();

//     //creating an object options
//     var options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     }
//     var day = today.toLocaleDateString("en-US", options);
//     return day;
// }


exports.getDate = function () {
    const today = new Date();

    //creating an object options
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    const day = today.toLocaleDateString("en-US", options);
    return day;
}

console.log(module.exports)