// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let result;

  if (someValue === 42) {
    result = 0
  }

  else if (someValue > 42) {
    result = (someValue - 42)
  }

  else if (someValue < 42) {
    result = (42 - someValue)
  }

  return result
}

function distanceFromHqInFeet(someValue) {
  let result

  result = distanceFromHqInBlocks(someValue)*264;

  return result

}

function distanceTravelledInFeet(val1, val2) {
  let result

  if (val1 >= val2) {
    result = (val1 - val2)*264
  }

  else {
    result = (val2 - val1)*264
  }

  return result
}

function calculatesFarePrice(start, destination) {
  let result

  if (distanceTravelledInFeet(start, destination) <= 400) {
    result = 0
  }

  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    result = (distanceTravelledInFeet(start, destination) - 400)*0.02
  }

  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
    result = 25
  }

  else if (distanceTravelledInFeet(start, destination) > 2500) {
    result = 'cannot travel that far'
  }



  return result
}
