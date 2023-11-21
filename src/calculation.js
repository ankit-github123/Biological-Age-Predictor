export const ageResult = (data) => {
  const floatData = {};

  for (const key in data) {
    floatData[key] = parseFloat(data[key]);
  }

  const resAlbumin = floatData.Albumin * 10 * -0.0336;
  // const resCreatinine = floatData.Creatinine * 88.401 * 0.0095;
  const resCreatinine = floatData.Creatinine * 88.401 * 0.012;

  // const resGlucose = floatData.Glucose * 0.0555 * 0.1953;
  const resGlucose = floatData.Glucose * 0.0555 * 0.189;
  // const resCreacProtein = Math.log(floatData.CreacProtein * 0.1) * 0.0954;
  // const resCreacProtein = Math.log(floatData.CreacProtein * 0.1) * 0.1;
  const resCreacProtein = Math.log(floatData.CreacProtein * 0.1) * 0.005;
  const resLympocyte = floatData.Lympocyte * -0.012;
  const resMeanCellVolume = floatData.MeanCellVolume * 0.0268;

  // const resRedCellDistWidth = floatData.RedCellDistWidth * 0.3306;
  const resRedCellDistWidth = floatData.RedCellDistWidth * 0.31;
  const resAlkalinePhosphatase = floatData.AlkalinePhosphatase * 0.0019;
  const resWhiteBloodCells = floatData.WhiteBloodCells * 0.0554;
  // const resAge = floatData.Age * 0.0804;
  const resAge = floatData.Age * 0.081;

  const LinComb =
    resAlbumin +
    resCreatinine +
    resGlucose +
    resCreacProtein +
    resLympocyte +
    resMeanCellVolume +
    resRedCellDistWidth +
    resAlkalinePhosphatase +
    resWhiteBloodCells +
    resAge -
    19.9067;

  const resexp1 = Math.exp(0.0076927 * 120) - 1;
  const resexp2 = -Math.exp(LinComb);
  const resexp3 = (resexp1 * resexp2) / 0.0076927;
  const MortScore = 1 - Math.exp(resexp3);
  const bioage =
    141.50225 + Math.log(-0.00553 * Math.log(1 - MortScore)) / 0.090165;
  return bioage;
};

//   const data = {
//     Albumin: "4.48",
//     Creatinine: "1.01",
//     Glucose: "111.2",
//     CreacProtein: "1.57",
//     Lympocyte: "42.6",
//     MeanCellVolume: "83.9",
//     RedCellDistWidth: "13.8",
//     AlkalinePhosphatase: "62",
//     WhiteBloodCells: "6.5",
//     Age: "35.9",
//   };
