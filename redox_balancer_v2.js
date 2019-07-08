var potentials = [
    {
        "id": 1,
        "equation": "\\rm {Li^+}_{(aq)} + e^- \\longrightarrow Li_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Li^+}_{(aq)}",
        "RHS": "\\rm Li_{(s)}",
        "emol": 1,
        "E0": -3.04
    },
    {
        "id": 2,
        "equation": "\\rm {K^+}_{(aq)} + e^- \\longrightarrow K_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {K^+}_{(aq)}",
        "RHS": "\\rm K_{(s)}",
        "emol": 1,
        "E0": -2.92
    },
    {
        "id": 3,
        "equation": "\\rm {Ca^{2+}}_{(aq)} + 2e^- \\longrightarrow Ca_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Ca^{2+}}_{(aq)}",
        "RHS": "\\rm Ca_{(s)}",
        "emol": 2,
        "E0": -2.76
    },
    {
        "id": 4,
        "equation": "\\rm {Na^+}_{(aq)} + e^- \\longrightarrow Na_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Na^{+}}_{(aq)}",
        "RHS": "\\rm Na_{(s)}",
        "emol": 1,
        "E0": -2.71
    },
    {
        "id": 5,
        "equation": "\\rm {Mg^{2+}}_{(aq)} + 2e^- \\longrightarrow Mg_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Mg^{2+}}_{(aq)}",
        "RHS": "\\rm Mg_{(s)}",
        "emol": 2,
        "E0": -2.38
    },
    {
        "id": 6,
        "equation": "\\rm Al^{3+}_{(aq)} + 3e^- \\longrightarrow Al_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Al^{3+}}_{(aq)}",
        "RHS": "\\rm Al_{(s)}",
        "emol": 3,
        "E0": -1.6
    },
    {
        "id": 7,
        "equation": "\\rm {Zn^{2+}}_{(aq)} + 2e^- \\longrightarrow Zn_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Zn^{2+}}_{(aq)}",
        "RHS": "\\rm Zn_{(s)}",
        "emol": 2,
        "E0": -0.76
    },
    {
        "id": 8,
        "equation": "\\rm {Cr^{3+}}_{(aq)} + 3e^- \\longrightarrow Cr_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Cr^{3+}}_{(aq)}",
        "RHS": "\\rm Cr_{(s)}",
        "emol": 3,
        "E0": -0.74
    },
    {
        "id": 9,
        "equation": "\\rm {Fe^{2+}}_{(aq)} + 2e^- \\longrightarrow Fe_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Fe^{2+}}_{(aq)}",
        "RHS": "\\rm Fe_{(s)}",
        "emol": 2,
        "E0": -0.41
    },
    {
        "id": 10,
        "equation": "\\rm {Cd^{2+}}_{(aq)} + 2e^- \\longrightarrow Cd_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Cd^{2+}}_{(aq)}",
        "RHS": "\\rm Cd_{(s)}",
        "emol": 2,
        "E0": -0.4
    }
]
function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
function onetonought (x) {
  if (x == 1) {
    return "" 
  } else {
    return x
  }
}
function eqncomp (halfeqn) {
  return [halfeqn["molLHS"],halfeqn["LHS"]," + ",halfeqn["emol"],"e^-"," \\leftrightharpoons ",halfeqn["molRHS"],halfeqn["RHS"]].join("");
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
    HCF = 0,
    id1 = 0,
    id2 = 0,
    finalid = 0,
    output = {};
//Generate random ids and extract half equations from potentials.json, checking for id1=id2 and id generates a correct emol
var min = 1;
var max = potentials.length;
var out = "";
while (id1 == id2) {
  id1 = Math.floor(Math.random()*(max - min)) + min;
  id2 = Math.floor(Math.random()*(max - min)) + min;
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
heqn1 = eqncomp(halfeqn1);
heqn2 = eqncomp(halfeqn2);
//Sort out all the coefficients
adjustedeqn1coefficients = [halfeqn1["molLHS"] * halfeqn2["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn1["molRHS"] * halfeqn2["emol"]];
adjustedeqn2coefficients = [halfeqn2["molLHS"] * halfeqn1["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn2["molRHS"] * halfeqn1["emol"]];
HCF = gcd(halfeqn1["emol"],halfeqn2["emol"]);
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
  finaleqn = [adjustedeqn1coefficients[0], halfeqn1["LHS"],"+",adjustedeqn2coefficients[adjustedeqn2coefficients.length-1],halfeqn2["RHS"], "\\leftrightharpoons",adjustedeqn1coefficients[adjustedeqn1coefficients.length-1], halfeqn1["RHS"], "+", adjustedeqn2coefficients[0], halfeqn2["LHS"]];
  reduction_potential = halfeqn1["E0"];
  oxidation_potential = halfeqn2["E0"];
  reduction_eqn = heqn1;
  oxidation_eqn = heqn2;
  DeltaE = reduction_potential - oxidation_potential;
} else {
  //halfeqn2 running forwards, halfeqn1 running backwards
  finaleqn = [adjustedeqn1coefficients[adjustedeqn1coefficients.length-1], halfeqn1["RHS"],"+",adjustedeqn2coefficients[0],halfeqn2["LHS"], "\\leftrightharpoons", adjustedeqn1coefficients[0], halfeqn1["LHS"], "+", adjustedeqn2coefficients[adjustedeqn2coefficients.length-1], halfeqn2["RHS"]];
  reduction_potential = halfeqn2["E0"];
  oxidation_potential = halfeqn1["E0"];
  reduction_eqn = heqn2;
  oxidation_eqn = heqn1;
  DeltaE = reduction_potential - oxidation_potential;
}
var emolprod = (halfeqn1["emol"]*halfeqn2["emol"])/HCF;

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
};
