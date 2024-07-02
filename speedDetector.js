//Speed Detector
//(challange 2)
let carSpeed = prompt("Enter your speed");
const speedLimit = 70;
if (carSpeedpeed <= speedLimit && carSpeed >= 0) {
    console.log("OK");
} else {
        if (carSpeedpeed > 70) {
            let points = Math.floor((carSpeedpeed - 70) / 5);
            console.log(points);
        }
        if (points > 12) {
            console.log("License Suspended");
        } else {
            console.log("Points", points);
        }
    }