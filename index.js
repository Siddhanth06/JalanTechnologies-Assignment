

//Question 1 Solution
const arr = [-4, 1, 3, -2, -1];

function find_zero(arr) {
  const result_elements = [];
  const adjacent_addition = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        result_elements.push(arr[i], arr[j]);
        return result_elements;
      } else {
        result_elements.push(arr[i], arr[j]);
        adjacent_addition[0] = arr[i] + arr[j];
        if (adjacent_addition[0] + arr[j + 1] == 0) {
          result_elements.push(arr[j + 1]);
          return result_elements;
        } else {
          adjacent_addition[0] = adjacent_addition[0] + arr[j + 1];
          result_elements.push(arr[j + 1]);
          if (adjacent_addition[0] + arr[j + 2] == 0) {
            result_elements.push(arr[j + 2]);
            return result_elements;
          } else {
            adjacent_addition[0] = adjacent_addition[0] + arr[j + 2];
            result_elements.push(arr[j + 2]);
            if (adjacent_addition[0] + arr[j + 3] == 0) {
              result_elements.push(arr[j + 3]);
              return result_elements;
            }else{
                return "No Elements Found";
            }
          }
        }
      }
    }
  }
}

const ans = find_zero(arr);
console.log(ans);



//Question 2 Solution
function carService(carBrand, carServicesCodes) {
  this.carBrand = carBrand;
  this.carServicesCodes = carServicesCodes;

  this.generatecarServiceBill = function () {
    let carServiceBill = 0;

    //Creating Array for all the service codes
    let serviceCodeArray = carServicesCodes.split(",");

    //Looping through the array to calculate the total carServiceBill
    for (let i = 0; i < serviceCodeArray.length; i++) {
      if (serviceCodeArray[i] == "BS01") {
        if (carBrand == "Hatchback") {
          carServiceBill += 2000;
        } else if (carBrand == "Sedan") {
          carServiceBill += 4000;
        } else if (carBrand == "SUV") {
          carServiceBill += 5000;
        }
      } else if (serviceCodeArray[i] == "EF01") {
        if (carBrand == "Hatchback") {
          carServiceBill += 5000;
        } else if (carBrand == "Sedan") {
          carServiceBill += 8000;
        } else if (carBrand == "SUV") {
          carServiceBill += 10000;
        }
      } else if (serviceCodeArray[i] == "CF01") {
        if (carBrand == "Hatchback") {
          carServiceBill += 2000;
        } else if (carBrand == "Sedan") {
          carServiceBill += 4000;
        } else if (carBrand == "SUV") {
          carServiceBill += 6000;
        }
      } else if (serviceCodeArray[i] == "BF01") {
        if (carBrand == "Hatchback") {
          carServiceBill += 1000;
        } else if (carBrand == "Sedan") {
          carServiceBill += 1500;
        } else if (carBrand == "SUV") {
          carServiceBill += 2500;
        }
      } else if (serviceCodeArray[i] == "GF01") {
        if (carBrand == "Hatchback") {
          carServiceBill += 3000;
        } else if (carBrand == "Sedan") {
          carServiceBill += 6000;
        } else if (carBrand == "SUV") {
          carServiceBill += 8000;
        }
      }
    }

    /* if the total service bill is more than ₹ 10000, a complimentary cleaning should be provided and specified
           in the service bill.*/
    if (carServiceBill > 10000) {
      return `Your Total Car Service Bill: \u20B9 ${carServiceBill} + Complimentary Cleaning`;
    } else {
      return `Your Total Car Service Bill: \u20B9 ${carServiceBill}`;
    }
  };
}

const carServiceObject = new carService("Sedan", "GF01,CF01");
console.log(carServiceObject.generatecarServiceBill());

