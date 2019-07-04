//Define and initialise variables
var heqn1 = [],
    heqn2 = [],
    finaleqn = [],
    adjustedeqn1coeff = [],
    adjustedeqn2coeff = [],
    DeltaE = 5,
    lencoeff = 0,
    compiledcoefficients = [],
    i,j,k,
    HCF = 0,
    id1 = 0,
    id2 = 0,
    output = {};
//Generate random ids and extract half equations from potentials.json, checking for id1=id2 and id generates a correct emol
var min = 1;
var max = potentials.length;
var out = "";
while (id1 == id2) {
  id1 = Numbas.math.floor(Math.random()*(max - min)) + min;
  id2 = Numbas.math.floor(Math.random()*(max - min)) + min;
}
//return ids = [id1,id2];
//Formally Extract half equations
var halfeqn1 = potentials.find(function(d) {
  return d.id===id1;
})
var halfeqn2 = potentials.find(function(d) {
  return d.id===id2;
})
//Put all the required elements of each half equation into a string array ready for concatenation
heqn1 = [halfeqn1["molLHS"],halfeqn1["LHS"]," + ",halfeqn1["emol"],"e^-"," \\longrightarrow ",halfeqn1["molRHS"],halfeqn1["RHS"]];
heqn2 = [halfeqn2["molLHS"],halfeqn2["LHS"]," + ",halfeqn2["emol"],"e^-"," \\longrightarrow ",halfeqn2["molRHS"],halfeqn2["RHS"]];
//Multiple each stoichiometric coefficience by the moles of electrons from the opposite half equation
adjustedeqn1coefficients = [halfeqn1["molLHS"] * halfeqn2["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn1["molRHS"] * halfeqn2["emol"]];
adjustedeqn2coefficients = [halfeqn2["molLHS"] * halfeqn1["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn2["molRHS"] * halfeqn1["emol"]];
//Calculate highest common factor in order to cancel down coefficients
compiledcoefficients = [adjustedeqn1coefficients[0], adjustedeqn1coefficients[adjustedeqn1coefficients.length-1],adjustedeqn2coefficients[0], adjustedeqn2coefficients[adjustedeqn2coefficients.length-1]] 
HCF = Numbas.math.gcd(halfeqn1["emol"],halfeqn2["emol"]);
var len = compiledcoefficients.length;
if (HCF !== 1){
  for (j=0;j<len;j++) {
    compiledcoefficients[j] = compiledcoefficients[j]/HCF;
  }
  adjustedeqn1coefficients = [compiledcoefficients[0],compiledcoefficients[1]];
  adjustedeqn2coefficients = [compiledcoefficients[2],compiledcoefficients[3]];
}
//Omit coeff=1 by replacing 1s with empty strings
for (k=0; k < adjustedeqn1coefficients.length;k++) {
  if (adjustedeqn1coefficients[k] ==1) {
    adjustedeqn1coefficients[k] = "" ;
  }
}
for (k=0; k < adjustedeqn2coefficients.length;k++) {
  if (adjustedeqn2coefficients[k] ==1) {
    adjustedeqn2coefficients[k] = "" ;
  }
}
//Calculate DeltaE
DeltaE = Math.max(halfeqn1["E0"],halfeqn2["E0"]) - Math.min(halfeqn1["E0"],halfeqn2["E0"]);

//Work out which "way around" each half equation should go and construct string arrays accordingly
if (halfeqn1["E0"] > halfeqn2["E0"]) {
  finaleqn = [adjustedeqn1coefficients[0],halfeqn1["LHS"]," + ",adjustedeqn2coefficients[adjustedeqn2coefficients.length -1],halfeqn2["RHS"]," \\rightleftharpoons ",adjustedeqn1coefficients[adjustedeqn1coefficients.length -1],halfeqn1["RHS"]," + ",adjustedeqn2coefficients[0],halfeqn2["LHS"]];
} else {
  finaleqn = [adjustedeqn2coefficients[0],halfeqn2["LHS"]," + ",adjustedeqn1coefficients[adjustedeqn1coefficients.length -1],halfeqn1["RHS"]," \\rightleftharpoons ",adjustedeqn2coefficients[adjustedeqn2coefficients.length -1],halfeqn2["RHS"]," + ",adjustedeqn1coefficients[0],halfeqn1["LHS"]];
}
//Build output dictionary by concatenating three string arrays
return output = {
  "halfeqn1": heqn1.join(" "),
  "halfeqn2": heqn2.join(" "),
  "halfeqn1E0": halfeqn1["E0"],
  "halfeqn2E0": halfeqn2["E0"],
  "finaleqn": finaleqn.join(" "),
  "emol": (halfeqn1["emol"]*halfeqn2["emol"])/HCF, 
  "ids" : [id1, id2],
  "DeltaE" : DeltaE
};
return jme.wrapValue(output);
