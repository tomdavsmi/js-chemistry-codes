function onetonought (x) {
  if (x == 1) {
    return "" 
  } else {
    return x
  }
}
function eqncomp (halfeqn) {
  return [onetonought(halfeqn["molLHS"]),halfeqn["LHS"],halfeqn["emol"],onetonought(halfeqn["molRHS"]),halfeqn["RHS"]];
}
//Define and initialise variables
var heqn1 = [],
    heqn2 = [],
    finaleqn = [],
    adjustedeqn1coefficients = [],
    adjustedeqn2coefficients = [],
    reduction_eqn = [],
    oxidation_eqn=[],
    DeltaE = 5,
    lencoeff = 0,
    compiledcoefficients = [],
    i,j,k,
    emolprod = 0,
    HCF = 0,
    id1 = 0,
    id2 = 0,
    finalid = 0,
    half1lhs = "",
    output = {};
//Generate random ids and extract half equations from potentials.json, checking that id1 not equal to id2
var min = 1;
var max = potentials.length;
var out = "";
//Loop until id1 does not equal id2, and the elements in each half equation are different
do {
  do {
    //Generate ids 
    id1 = Math.floor(Math.random()*(max - min)) + min;
    id2 = Math.floor(Math.random()*(max - min)) + min;
  } while (id1 == id2)
  //Extract half equations
  var halfeqn1 = potentials.find(function(d) {
    return d.id===id1;
  })
  var halfeqn2 = potentials.find(function(d) {
    return d.id===id2;
  })
  //Extract element symbols and make sure that each half-equation uses a different element
  half1lhs = halfeqn1.LHS.match(/\w+((?=_)|(?=\^))/)[0];
  half2lhs = halfeqn2.LHS.match(/\w+((?=_)|(?=\^))/)[0];
} while (half1lhs.localeCompare(half2lhs)==0)
//Put all the required elements of each half equation into a string array ready for concatenation
heqn1 = eqncomp(halfeqn1);
heqn2 = eqncomp(halfeqn2);
//Sort out all the coefficients
adjustedeqn1coefficients = [halfeqn1["molLHS"] * halfeqn2["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn1["molRHS"] * halfeqn2["emol"]];
adjustedeqn2coefficients = [halfeqn2["molLHS"] * halfeqn1["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn2["molRHS"] * halfeqn1["emol"]];
HCF = Numbas.math.gcd(halfeqn1["emol"],halfeqn2["emol"]); 
if (halfeqn1["emol"]===halfeqn2["emol"]){
  emolprod = halfeqn1["emol"]
} else {
  emolprod = (halfeqn1["emol"]*halfeqn2["emol"]);
}
compiledcoefficients = [adjustedeqn1coefficients[0], adjustedeqn1coefficients[adjustedeqn1coefficients.length-1],adjustedeqn2coefficients[0], adjustedeqn2coefficients[adjustedeqn2coefficients.length-1]] 
var len = compiledcoefficients.length;
if (HCF !== 1){
  for (j=0;j<len;j++) {
    compiledcoefficients[j] = compiledcoefficients[j]/HCF;
  }
}
adjustedeqn1coefficients = [compiledcoefficients[0],compiledcoefficients[1]];
adjustedeqn2coefficients = [compiledcoefficients[2],compiledcoefficients[3]];
for (k=0;k<2;k++) {
  adjustedeqn1coefficients[k] = onetonought(adjustedeqn1coefficients[k])
  adjustedeqn2coefficients[k] = onetonought(adjustedeqn2coefficients[k])
}
finalid = Math.floor(Math.random() * (3-1)) + 1
if (finalid==1){
  //halfeqn1 is running forwards, halfeqn2 running backwards
  finaleqn = [adjustedeqn1coefficients[0], halfeqn1["LHS"],"+",adjustedeqn2coefficients[adjustedeqn2coefficients.length-1],halfeqn2["RHS"], "\\leftrightharpoons",adjustedeqn1coefficients[adjustedeqn1coefficients.length-1], halfeqn1["RHS"], "+", adjustedeqn2coefficients[0], halfeqn2["LHS"]].join("");
  reduction_potential = halfeqn1["E0"];
  oxidation_potential = halfeqn2["E0"];
  reduction_eqn = [adjustedeqn1coefficients[0], halfeqn1["LHS"],emolprod,adjustedeqn1coefficients[adjustedeqn1coefficients.length-1],halfeqn1["RHS"]];
  oxidation_eqn = [adjustedeqn2coefficients[adjustedeqn2coefficients.length-1], halfeqn2["RHS"],emolprod,adjustedeqn2coefficients[0], halfeqn2["LHS"]];
  DeltaE = reduction_potential - oxidation_potential;
} else {
  //halfeqn2 running forwards, halfeqn1 running backwards
  finaleqn = [adjustedeqn1coefficients[adjustedeqn1coefficients.length-1], halfeqn1["RHS"],"+",adjustedeqn2coefficients[0],halfeqn2["LHS"], "\\leftrightharpoons", adjustedeqn1coefficients[0], halfeqn1["LHS"], "+", adjustedeqn2coefficients[adjustedeqn2coefficients.length-1], halfeqn2["RHS"]].join("");
  reduction_potential = halfeqn2["E0"];
  oxidation_potential = halfeqn1["E0"];
  reduction_eqn = [adjustedeqn2coefficients[0], halfeqn2["LHS"],emolprod,adjustedeqn2coefficients[adjustedeqn2coefficients.length-1],halfeqn2["RHS"]];
  oxidation_eqn = [adjustedeqn1coefficients[adjustedeqn1coefficients.length-1], halfeqn1["RHS"],emolprod,adjustedeqn1coefficients[0], halfeqn1["LHS"]];
  DeltaE = reduction_potential - oxidation_potential;
}
return output = {
  "halfeqn1": heqn1,
  "halfeqn2": heqn2,
  "halfeqn1E0": halfeqn1["E0"],
  "halfeqn2E0": halfeqn2["E0"],
  "reduction_potential": reduction_potential,
  "oxidation_potential": oxidation_potential, 
  "finaleqn": finaleqn,
  "reductioneqn": reduction_eqn,
  "oxidationeqn": oxidation_eqn,
  "emol": emolprod, 
  "DeltaE" : DeltaE
}
