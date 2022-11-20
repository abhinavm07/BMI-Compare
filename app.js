const data = {
  name: ["Abhinav", "Roshni", "Dirghayu", "Zayant"],
  kg: [55, 60, 84, 75],
  height: [1.72, 1.5, 1.86, 1.8],
};
let arreyLength = data.name.length;

let bmiData = [];

const bmiCalc = (arrey) => {
  if (arreyLength > 1) {
    for (let i = 0; i < arreyLength; i++) {
      let bmi = arrey.kg[i] / arrey.height[i] ** 2;
      bmiData.push(bmi);
    }
    return bmiData;
  } else {
    console.log(`Error Occured`);
  }
};

const bmicompare = (arreyYarr, bmiData) => {
  let bmiLen = bmiData.length;
  let highestBmi = 0;
  let outMessage = ``;
  id = 0;
  if (bmiLen > 1) {
    for (let i = 0; i < bmiLen; i++) {
      if (i + 1 < bmiLen) {
        if (bmiData[i] > bmiData[i + 1]) {
          if (bmiData[i] > highestBmi) {
            highestBmi = bmiData[i];
            id = i;
          }
        } else if (bmiData[i + 1] > bmiData[i]) {
          if (bmiData[i + 1] > highestBmi) {
            highestBmi = bmiData[i + 1];
            id = i + 1;
          }
        }
      }
    }
  }
  outMessage += `${arreyYarr.name[id]} has the highest BMI of ${highestBmi} from the given group of people`;
  return outMessage;
};

console.log(bmiCalc(data));
alert(bmicompare(data, bmiData));

// if (bmiData.length > 1) {
//   if (bmiData[0] > bmiData[1]) {
//     console.log(
//       `${arreyYarr.name[0]} has a higher BMI of ${bmiData[0]} than that of ${arreyYarr.name[1]} with BMI of ${bmiData[1]}`
//     );
//   } else if (bmiData[1] > bmiData[0]) {
//     console.log(
//       `${arreyYarr.name[1]} has a higher BMI of ${bmiData[1]} than that of ${arreyYarr.name[0]} with BMI of ${bmiData[0]}`
//     );
//   }

// console.log(
//   `${arreyYarr.name[i]} has a higher BMI of ${
//     bmiData[i]
//   } than that of ${arreyYarr.name[i + 1]} with BMI of ${
//     bmiData[i + 1]
//   }`
// );
