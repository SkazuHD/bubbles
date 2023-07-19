//UTIL CLASS
class Dataset {
  constructor(year, value) {
    this.year = year;
    this.value = value;
  }
}

//DATA

const co2 = [
  315.232, 315.9808333, 316.91, 317.6441667, 318.4541667, 318.9925, 319.6166667,
  320.0358333, 321.3691667, 322.1808333, 323.05, 324.6233333, 325.6816667,
  326.3191667, 327.4566667, 329.6775, 330.1916667, 331.1291667, 332.0266667,
  333.8433333, 335.415, 336.835, 338.7625, 340.1191667, 341.4783333, 343.1525,
  344.8683333, 346.3516667, 347.6083333, 349.3116667, 351.69, 353.205, 354.4525,
  355.7041667, 356.5458333, 357.2158333, 358.9591667, 360.9683333, 362.7433333,
  363.8766667, 366.84, 368.54, 369.7075, 371.3191667, 373.4525, 375.9833333,
  377.6983333, 379.9833333, 382.0908333, 384.025, 385.8316667, 387.6425,
  390.1016667, 391.8508333, 394.0558333, 396.7375, 398.8125, 401.0116667,
  404.4125, 406.7583333, 408.715, 411.6541667, 414.2383333, 416.4508333,
  418.5641667, 421.04,
];
const co21 = [
  315.232, 315.9808333, 316.91, 317.6441667, 318.4541667, 318.9925, 319.6166667,
  320.0358333, 321.3691667, 322.1808333, 323.05, 324.6233333, 325.6816667,
  326.3191667, 327.4566667, 329.6775, 330.1916667, 331.1291667, 332.0266667,
  333.8433333, 335.415, 336.835, 338.7625, 340.1191667, 341.4783333, 343.1525,
  344.8683333, 346.3516667, 347.6083333, 349.3116667, 351.69, 353.205, 354.4525,
  355.7041667, 356.5458333, 357.2158333, 358.9591667, 360.9683333, 362.7433333,
  363.8766667, 366.84, 368.54, 369.7075, 371.3191667, 373.4525, 375.9833333,
  377.6983333, 379.9833333, 382.0908333, 384.025, 385.8316667, 387.6425,
  390.1016667, 391.8508333, 394.0558333, 396.7375, 398.8125, 401.0116667,
  404.4125, 406.7583333, 408.715, 411.6541667, 414.2383333, 416.4508333,
  418.5641667, 421.04,
];
const co2Year = [
  1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970,
  1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
  1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
  1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];
for (let i = 0; i < co2.length; i++) {
  co2[i] = new Dataset(co2Year[i], co2[i]);
}

const waterLevel = [
  -32.72, -30.53, -27.27, -21.27, -23.65, -20.04, -16.79, -11.21, -7.08, -3.71,
  -1.75, 3.04, 4.51, 5.1, 7.28, 12.39, 13.69, 13.04, 23.29, 26.35, 30, 40.99,
  43.15, 44.3, 48.53, 55.51, 56.55, 60.86, 63.82,
];
const waterLevel1 = [
  -32.72, -30.53, -27.27, -21.27, -23.65, -20.04, -16.79, -11.21, -7.08, -3.71,
  -1.75, 3.04, 4.51, 5.1, 7.28, 12.39, 13.69, 13.04, 23.29, 26.35, 30, 40.99,
  43.15, 44.3, 48.53, 55.51, 56.55, 60.86, 63.82,
];
const waterLevelYear = [
  1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022,
];
for (let i = 0; i < waterLevel.length; i++) {
  waterLevel[i] = new Dataset(waterLevelYear[i], waterLevel[i]);
}

const globalTemp = [
  0, 12, 0.06, 0.06, 0.08, 0.06, 0.08, -0.08, -0.04, 0.02, 0.0, 0.02, 0.19,
  0.07, -0.06, 0.12, 0.15, -0.01, -0.02, 0.02, 0.2, 0.14, 0.27, 0.28, 0.25,
  0.24, 0.32, 0.21, 0.18, 0.23, 0.38, 0.33, 0.28, 0.37, 0.34, 0.25, 0.26, 0.3,
  0.34, 0.31, 0.47, 0.52, 0.31, 0.33, 0.45, 0.48, 0.5, 0.49, 0.49, 0.48, 0.4,
  0.39, 0.52, 0.53, 0.41, 0.48, 0.51, 0.61, 0.72, 0.75, 0.69, 0.66, 0.74, 0.72,
  0.63, 0.67,
];
const globalTemp1 = [
  0, 12, 0.06, 0.06, 0.08, 0.06, 0.08, -0.08, -0.04, 0.02, 0.0, 0.02, 0.19,
  0.07, -0.06, 0.12, 0.15, -0.01, -0.02, 0.02, 0.2, 0.14, 0.27, 0.28, 0.25,
  0.24, 0.32, 0.21, 0.18, 0.23, 0.38, 0.33, 0.28, 0.37, 0.34, 0.25, 0.26, 0.3,
  0.34, 0.31, 0.47, 0.52, 0.31, 0.33, 0.45, 0.48, 0.5, 0.49, 0.49, 0.48, 0.4,
  0.39, 0.52, 0.53, 0.41, 0.48, 0.51, 0.61, 0.72, 0.75, 0.69, 0.66, 0.74, 0.72,
  0.63, 0.67,
];

const globalTempYear = [
  1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970,
  1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
  1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
  1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];
for (let i = 0; i < globalTemp.length; i++) {
  globalTemp[i] = new Dataset(globalTempYear[i], globalTemp[i]);
}
//0.63 + (2023 - 2021)(0.67 - 0.63) / (2022 - 2021);

const arcticIce = [
  6.9, 7.54, 6.9, 7.17, 7.22, 6.43, 6.49, 7.16, 6.96, 7.13, 6.91, 6.04, 6.3,
  7.21, 6.18, 6.96, 6.03, 7.19, 6.63, 6.35, 5.76, 5.98, 6.6, 5.64, 6.01, 5.79,
  5.32, 5.77, 4.16, 4.59, 5.12, 4.62, 4.34, 3.39, 5.05, 5.03, 4.43, 4.17, 4.67,
  4.66, 4.19, 3.82, 4.77, 4.67,
];
const arcticIce1 = [
  6.9, 7.54, 6.9, 7.17, 7.22, 6.43, 6.49, 7.16, 6.96, 7.13, 6.91, 6.04, 6.3,
  7.21, 6.18, 6.96, 6.03, 7.19, 6.63, 6.35, 5.76, 5.98, 6.6, 5.64, 6.01, 5.79,
  5.32, 5.77, 4.16, 4.59, 5.12, 4.62, 4.34, 3.39, 5.05, 5.03, 4.43, 4.17, 4.67,
  4.66, 4.19, 3.82, 4.77, 4.67,
];
const arcticIceYear = [
  1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
  1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
  2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
  2018, 2019, 2020, 2021, 2022,
];
for (let i = 0; i < arcticIce.length; i++) {
  arcticIce[i] = new Dataset(arcticIceYear[i], arcticIce[i]);
}

const antarcticIce = [
  2.91, 2.55, 2.7, 2.89, 2.86, 2.43, 2.65, 2.98, 3.03, 2.69, 2.73, 2.81, 2.57,
  2.52, 2.31, 3.1, 3.36, 2.63, 2.29, 2.79, 2.72, 2.65, 3.46, 2.72, 3.65, 3.31,
  2.84, 2.52, 2.75, 3.75, 2.71, 2.86, 2.34, 3.17, 3.69, 3.56, 3.59, 2.63, 2.11,
  2.22, 2.46, 2.74, 2.7,
];
const antarcticIce1 = [
  2.91, 2.55, 2.7, 2.89, 2.86, 2.43, 2.65, 2.98, 3.03, 2.69, 2.73, 2.81, 2.57,
  2.52, 2.31, 3.1, 3.36, 2.63, 2.29, 2.79, 2.72, 2.65, 3.46, 2.72, 3.65, 3.31,
  2.84, 2.52, 2.75, 3.75, 2.71, 2.86, 2.34, 3.17, 3.69, 3.56, 3.59, 2.63, 2.11,
  2.22, 2.46, 2.74, 2.7,
];
const antarcticIceYear = [
  1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
  1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
  2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
  2018, 2019, 2020, 2021,
];
for (let i = 0; i < antarcticIce.length; i++) {
  antarcticIce[i] = new Dataset(antarcticIceYear[i], antarcticIce[i]);
}

// Combine all Years into one Set

let allYears = new Set([
  ...new Set(co2Year),
  ...new Set(waterLevelYear),
  ...new Set(globalTempYear),
  ...new Set(arcticIceYear),
  ...new Set(antarcticIceYear),
]);

//Merge all datasets into one Object by year using the Set
let allData = {};
for (let year of allYears) {
  allData[year] = {
    co2: co2.find((element) => element.year === year),
    waterLevel: waterLevel.find((element) => element.year === year),
    globalTemp: globalTemp.find((element) => element.year === year),
    arcticIce: arcticIce.find((element) => element.year === year),
    antarcticIce: antarcticIce.find((element) => element.year === year),
  };
}

//CONFIG
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const bubbles = [];
const currentYear = document.getElementById("currentYear");
const timeline = document.getElementById("timeline");
let animation;
timeline.min = [...allYears][0];
timeline.max = [...allYears][allYears.size - 1];

timeline.addEventListener("input", () => {
  currentYear.innerHTML = timeline.value;
  clearInterval(animation);
  console.log(timeline.value, "timeline Input");
  if (!canvas.classList.contains("paused")) {
    startAnimation(timeline.value);
  } else {
    startAnimation(timeline.value, true);
  }
});
canvas.addEventListener("click", () => {
  canvas.classList.toggle("paused");
  let btn = document.getElementById("play-pause");
  if (canvas.classList.contains("paused")) {
    clearInterval(animation);
    btn.classList.add("paused");
  } else {
    startAnimation(timeline.value);
    btn.classList.remove("paused");
    btn.classList.add("play");
    setTimeout(() => {
      btn.classList.remove("play");
    }, 1000);
  }
});

//Relative Positions and Scale
const co2Rel = {
  initialVal: 300,
  pos: () => {
    return [canvas.width * 0.45, canvas.height * 0.45];
  },
  color: [170, 170, 170, 0.1],
  scale: 0.8,
};

const waterLevelRel = {
  initialVal: 100,
  pos: () => {
    return [canvas.width * 0.6, canvas.height * 0.55];
  },
  color: [0, 0, 255, 0.3],
  scale: 1.8,
};
const arcticIceRel = {
  initialVal: 7,
  pos: () => {
    return [canvas.width * 0.75, canvas.height * 0.25];
  },
  color: [255, 235, 245, 0.9],
  scale: 12,
};
const antarcticIceRel = {
  initialVal: 3,
  pos: () => {
    return [canvas.width * 0.25, canvas.height * 0.75];
  },
  color: [255, 235, 245, 0.9],
  scale: 12,
};

//Initial Size
let smallest = Math.min(window.innerHeight, window.innerWidth);
canvas.width = smallest * 0.98;
canvas.height = smallest * 0.98;
let globalScale = Math.min(canvas.height / 1000, canvas.width / 1000);

function resizeCanvas() {
  let smallest = Math.min(window.innerHeight, window.innerWidth);
  canvas.width = smallest * 0.98;
  canvas.height = smallest * 0.98;
  globalScale = Math.min(canvas.height / 1000, canvas.width / 1000);

  //Set position of all elements
  waterBubble.setPosition(waterLevelRel.pos());
  co2Bubble.setPosition(co2Rel.pos());
  arcticIceBubble.setPosition(arcticIceRel.pos());
  antarcticIceBubble.setPosition(antarcticIceRel.pos());
  //Set Scale of all elements

  waterBubble.scale = waterLevelRel.scale * globalScale;
  co2Bubble.scale = co2Rel.scale * globalScale;
  arcticIceBubble.scale = arcticIceRel.scale * globalScale;
  antarcticIceBubble.scale = antarcticIceRel.scale * globalScale;

  //Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  //Draw all elements
  waterBubble.draw();
  co2Bubble.draw();
  arcticIceBubble.draw();
  antarcticIceBubble.draw();
}

//Resize the canvas when the window is resized

window.addEventListener("resize", () => {
  resizeCanvas();
});

//CREATION
let waterBubble = new Bubble(
  waterLevelRel.pos(),
  waterLevelRel.initialVal,
  waterLevelRel.color,
  waterLevelRel.scale * globalScale,
  "Water Level",
  "mm"
);
waterBubble.draw();
waterBubble.temp = {
  value: +0.0,
  unit: "Celsius",
};
let co2Bubble = new Bubble(
  co2Rel.pos(),
  co2Rel.initialVal,
  co2Rel.color,
  co2Rel.scale * globalScale,
  "Carbon dioxide",
  "ppm"
);
co2Bubble.draw();
let arcticIceBubble = new Bubble(
  arcticIceRel.pos(),
  arcticIceRel.initialVal,
  arcticIceRel.color,
  arcticIceRel.scale * globalScale,
  "Arctic Ice",
  "million km²"
);
arcticIceBubble.draw();
let antarcticIceBubble = new Bubble(
  antarcticIceRel.pos(),
  antarcticIceRel.initialVal,
  antarcticIceRel.color,
  antarcticIceRel.scale * globalScale,
  "Antarctic Ice",
  "million km²"
);
antarcticIceBubble.draw();

bubbles.push(waterBubble, co2Bubble, arcticIceBubble, antarcticIceBubble);

//ANIMATION
let lastAnimatedYear = 0;
function animate(year) {
  console.log(year, "year in animation");
  //Update the size of the bubbles based on the data
  context.clearRect(0, 0, canvas.width, canvas.height);
  let waterLevel = allData[year].waterLevel;
  let co2 = allData[year].co2;
  let arcticIce = allData[year].arcticIce;
  let antarcticIce = allData[year].antarcticIce;
  let globalTemp = allData[year].globalTemp;
  currentYear.innerHTML = year;
  waterBubble.temp = {
    value: globalTemp !== undefined ? globalTemp.value : undefined,
    unit: "Celsius",
  };

  waterBubble.changeColor(
    globalTemp !== undefined
      ? [
          allData[year].globalTemp.value * 300,
          0,
          255 - allData[year].globalTemp.value * 400,
          0.3,
        ]
      : [0, 0, 255, 0.3]
  );
  waterBubble.setSize(
    waterLevel !== undefined
      ? waterLevelRel.initialVal + allData[year].waterLevel.value
      : waterBubble.radius
  );
  co2Bubble.setSize(
    co2 !== undefined ? allData[year].co2.value : co2Bubble.radius
  );
  arcticIceBubble.setSize(
    arcticIce !== undefined
      ? allData[year].arcticIce.value
      : arcticIceBubble.radius
  );
  antarcticIceBubble.setSize(
    antarcticIce !== undefined
      ? allData[year].antarcticIce.value
      : antarcticIceBubble.radius
  );
  timeline.value = year;
  lastAnimatedYear = year;
}

//Animate the bubbles every 1000ms year by year
let lastYear = [...allYears][allYears.size - 1];

function startAnimation(year, once = false) {
  if (once) {
    animate(year);
    return;
  }
}

function startAnimation(year, once = false) {
  if (once) {
    animate(year);
    return;
  }

  animation = setInterval(() => {
    //Clear the canvas
    if (year < lastYear) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      //Clear the interval when the last year is reached
      clearInterval(animation);
      canvas.classList.add("paused");
    }
    animate(year);
    year++;
    //console.debug(year, lastYear)
  }, 100);
}

let lastHoverBubble;
canvas.addEventListener("bubbleHover", (e) => {
  let bubble = e.bubble;
  if (lastHoverBubble !== bubble) {
    lastHoverBubble = bubble;
  } else {
    return;
  }

  //Redraw all bubbles except the hovered one
  context.clearRect(0, 0, canvas.width, canvas.height);

  bubbles.forEach((b) => {
    if (b !== bubble) {
      b.draw();
    } else {
      console.log(b.text);
    }
  });
});


function future1(wunschjahr) {
  let year1 = antarcticIceYear[antarcticIceYear.length - 1]; //2021
  let stand1year = antarcticIce1[antarcticIce1.length - 1]; //2.7
  let year2 = antarcticIceYear[antarcticIceYear.length - 2]; //2020
  let stand2year = antarcticIce1[antarcticIce1.length - 2]; //2.74
  let stand2safe;
  let newyear;
  while (wunschjahr != year1) {
    stand2safe = stand1year;
    newyear = year1 + 1;

    stand1year =
        stand2year +
        ((newyear - year2) * (stand1year - stand2year)) / (year1 - year2);

    year2 = year2 + 1;
    year1 = newyear;
    stand2year = stand2safe;
    if (allData[newyear] === undefined) {
      allData[newyear] = {};
    }
    allData[newyear].antarcticIce = new Dataset(newyear,stand2safe);
  }
  return stand1year;
}

function future2(wunschjahr) {
  let year1 = arcticIceYear[arcticIceYear.length - 1]; //2021
  let stand1year = arcticIce1[arcticIce1.length - 1]; //2.7
  let year2 = arcticIceYear[arcticIceYear.length - 2]; //2020
  let stand2year = arcticIce1[arcticIce1.length - 2]; //2.74
  let stand2safe;
  let newyear;
  while (wunschjahr != year1) {
    stand2safe = stand1year;
    newyear = year1 + 1;

    stand1year =
      stand2year +
      ((newyear - year2) * (stand1year - stand2year)) / (year1 - year2);

    year2 = year2 + 1;
    year1 = newyear;
    stand2year = stand2safe;
    if (allData[newyear] === undefined) {
      allData[newyear] = {};
    }
    allData[newyear].arcticIce = new Dataset(newyear, stand2safe);
  }
  return stand1year;
}
//console.log(future2(2023));

function future3(wunschjahr) {
  let year1 = globalTempYear[globalTempYear.length - 1]; //2021
  let stand1year = globalTemp1[globalTemp1.length - 1]; //2.7
  let year2 = globalTempYear[globalTempYear.length - 2]; //2020
  let stand2year = globalTemp1[globalTemp1.length - 2]; //2.74
  let stand2safe;
  let newyear;
  while (wunschjahr != year1) {
    stand2safe = stand1year;
    newyear = year1 + 1;

    stand1year =
        stand2year +
        ((newyear - year2) * (stand1year - stand2year)) / (year1 - year2);

    year2 = year2 + 1;
    year1 = newyear;
    stand2year = stand2safe;
    if (allData[newyear] === undefined) {
      allData[newyear] = {};
    }
    allData[newyear].globalTemp = new Dataset(newyear, stand2safe);
  }
  return stand1year;
}
//console.log(future3(2023));

function future4(wunschjahr) {
  let year1 = waterLevelYear[waterLevelYear.length - 1]; //2021
  let stand1year = waterLevel1[waterLevel1.length - 1]; //2.7
  let year2 = waterLevelYear[waterLevelYear.length - 2]; //2020
  let stand2year = waterLevel1[waterLevel1.length - 2]; //2.74
  let stand2safe;
  let newyear;
  while (wunschjahr != year1) {
    stand2safe = stand1year;
    newyear = year1 + 1;

    stand1year =
        stand2year +
        ((newyear - year2) * (stand1year - stand2year)) / (year1 - year2);

    year2 = year2 + 1;
    year1 = newyear;
    stand2year = stand2safe;
    //Add to allData
    if (allData[newyear] === undefined) {
      allData[newyear] = {};
    }
    allData[newyear].waterLevel = new Dataset(newyear, stand2safe);
  }
  return stand1year;
}
//console.log(future5(2023));
function future5(wunschjahr) {
  let year1 = co2Year[co2Year.length - 1]; //2021
  let stand1year = co21[co21.length - 1]; //2.7
  let year2 = co2Year[co2Year.length - 2]; //2020
  let stand2year = co21[co21.length - 2]; //2.74
  let stand2safe;
  let newyear;
  while (wunschjahr != year1) {
    stand2safe = stand1year;
    newyear = year1 + 1;

    stand1year =
      stand2year +
      ((newyear - year2) * (stand1year - stand2year)) / (year1 - year2);

    year2 = year2 + 1;
    year1 = newyear;
    stand2year = stand2safe;
    //Add to allData
    if (allData[newyear] === undefined) {
      allData[newyear] = {};
    }
    allData[newyear].co2 = new Dataset(newyear, stand2safe);
    }
    return stand1year;
}
function Futura(year) {
  let antarcticIce = future1(year);
  let arcticIce = future2(year);
  let globalTemp = future3(year);
  let waterLevel = future4(year);
  let co2 = future5(year);

  allYears = Object.keys(allData);
  lastYear = allYears[allYears.length - 1];

}

document.getElementById("suche").addEventListener("change", function () {
  let year = document.getElementById("suche").value;
  if (isNaN(year)) {
    alert("Bitte geben Sie eine Zahl ein!");
    return;
  }
  if (year >= 2022) {
    Futura(year);
    startAnimation(lastAnimatedYear, true);
  }
});
