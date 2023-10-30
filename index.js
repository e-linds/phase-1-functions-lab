// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs((destination - start)*264)
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 401) {
        return 0
    } else if (distance > 400 && distance < 2001 ) {
        return (distance-400) * .02
    } else if (distance > 2000 && distance < 2501) {
        return 25
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
}