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
    },
    {
        "id": 11,
        "equation": "\\rm {Ni^{2+}}_{(aq)} + 2e^- \\longrightarrow Ni_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Ni^{2+}}_{(aq)}",
        "RHS": "\\rm Ni_{(s)}",
        "emol": 2,
        "E0": -0.23
    },
    {
        "id": 12,
        "equation": "\\rm {Sn^{2+}}_{(aq)} + 2e^- \\longrightarrow Sn_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Sn^{2+}}_{(aq)}",
        "RHS": "\\rm Sn_{(s)}",
        "emol": 2,
        "E0": -0.14
    },
    {
        "id": 13,
        "equation": "\\rm {Pb^{2+}}_{(aq)} + 2e^- \\longrightarrow Pb_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Pb^{2+}}_{(aq)}",
        "RHS": "\\rm Pb_{(s)}",
        "emol": 2,
        "E0": -0.13
    },
    {
        "id": 14,
        "equation": "\\rm {Fe^{3+}}_{(aq)} + 3e^- \\longrightarrow Fe_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Fe^{3+}}_{(aq)}",
        "RHS": "\\rm Fe_{(s)}",
        "emol": 3,
        "E0": -0.04
    },
    {
        "id": 15,
        "equation": "\\rm {Sn^{4+}}_{(aq)} + 2e^- \\longrightarrow {Sn^{2+}}_{(aq)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Sn^{4+}}_{(aq)}",
        "RHS": "\\rm {Sn^{2+}}_{(aq)}",
        "emol": 2,
        "E0": 0.15
    },
    {
        "id": 16,
        "equation": "\\rm {Cu^{2+}}_{(aq)} + e^- \\longrightarrow {Cu^{+}}_{(aq)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Cu^{2+}}_{(aq)}",
        "RHS": "\\rm {Cu^{+}}_{(aq)}",
        "emol": 1,
        "E0": 0.16
    },
    {
        "id": 17,
        "equation": "\\rm {Cu^{2+}}_{(aq)} + 2e^- \\longrightarrow Cu_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Cu^{2+}}_{(aq)}",
        "RHS": "\\rm {Cu}_{(s)}",
        "emol": 2,
        "E0": 0.34
    },
    {
        "id": 18,
        "equation": "\\rm {Cu^+}_{(aq)} + e^- \\longrightarrow Cu_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Cu^{+}}_{(aq)}",
        "RHS": "\\rm {Cu}_{(s)}",
        "emol": 1,
        "E0": 0.52
    },
    {
        "id": 19,
        "equation": "\\rm {I_2}_{(s)} + 2e^- \\longrightarrow {2I^-}_{(aq)}",
        "molLHS": 1,
        "molRHS": 2,
        "LHS": "\\rm {I_{2}}_{(s)}",
        "RHS": "\\rm {I^{-}}_{(aq)}",
        "emol": 2,
        "E0": 0.54
    },
    {
        "id": 20,
        "equation": "\\rm {Fe^{3+}}_{(aq)} + e^- \\longrightarrow {Fe^{2+}}_{(aq)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Fe^{3+}}_{(aq)}",
        "RHS": "\\rm {Fe^{2+}}_{(aq)}",
        "emol": 1,
        "E0": 0.77
    },
    {
        "id": 21,
        "equation": "\\rm {{Hg_{2}}^{2+}}_{(aq)} + 2e^- \\longrightarrow {2Hg}_{(l)}",
        "molLHS": 1,
        "molRHS": 2,
        "LHS": "\\rm {{Hg_{2}}^{2+}}_{(aq)}",
        "RHS": "\\rm {Hg}_{(l)}",
        "emol": 2,
        "E0": 0.8
    },
    {
        "id": 22,
        "equation": "\\rm {Ag^{+}}_{(aq)} + e^- \\longrightarrow Ag_{(s)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Ag^{+}}_{(aq)}",
        "RHS": "\\rm {Ag}_{(s)}",
        "emol": 1,
        "E0": 0.8
    },
    {
        "id": 23,
        "equation": "\\rm {Hg^{2+}}_{(aq)} + 2e^- \\longrightarrow Hg_{(l)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Hg^{2+}}_{(aq)}",
        "RHS": "\\rm {Hg}_{(l)}",
        "emol": 2,
        "E0": 0.85
    },
    {
        "id": 24,
        "equation": "\\rm {2Hg^{2+}}_{(aq)} + 2e^- \\longrightarrow {{Hg_{2}}^{2+}}_{(aq)}",
        "molLHS": 2,
        "molRHS": 1,
        "LHS": "\\rm {Hg^{2+}}_{(aq)}",
        "RHS": "\\rm {{Hg_{2}}^{2+}}_{(aq)}",
        "emol": 2,
        "E0": 0.9
    },
    {
        "id": 25,
        "equation": "\\rm {Br_2}_{(l)} + 2e^- \\longrightarrow {2Br^-}_{(aq)}",
        "molLHS": 1,
        "molRHS": 2,
        "LHS": "\\rm {Br_{2}}_{(l)}",
        "RHS": "\\rm {Br^{-}}_{(aq)}",
        "emol": 2,
        "E0": 1.07
    },
    {
        "id": 26,
        "equation": "\\rm {Cl_2}_{(g)} + 2e^- \\longrightarrow {2Cl^-}_{(aq)}",
        "molLHS": 1,
        "molRHS": 2,
        "LHS": "\\rm {Cl_{2}}_{(g)}",
        "RHS": "\\rm {Cl^{-}}_{(aq)}",
        "emol": 2,
        "E0": 1.36
    },
    {
        "id": 27,
        "equation": "\\rm {Ce^{4+}}_{(aq)} + e^- \\longrightarrow {Ce^{3+}}_{(aq)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Ce^{4+}}_{(aq)}",
        "RHS": "\\rm {Ce^{3+}}_{(aq)}",
        "emol": 1,
        "E0": 1.44
    },
    {
        "id": 28,
        "equation": "\\rm {Co^{3+}}_{(aq)} + e^- \\longrightarrow {Co^{2+}}_{(aq)}",
        "molLHS": 1,
        "molRHS": 1,
        "LHS": "\\rm {Co^{3+}}_{(aq)}",
        "RHS": "\\rm {Co^{2+}}_{(aq)}",
        "emol": 1,
        "E0": 1.82
    },
    {
        "id": 29,
        "equation": "\\rm {S_2O_8^{2-}}_{(aq)} + 2e^- \\longrightarrow {2SO_4^{2-}}_{(aq)}",
        "molLHS": 1,
        "molRHS": 2,
        "LHS": "\\rm {S_2O_8^{2-}}_{(aq)}",
        "RHS": "\\rm {SO_4^{2-}}_{(aq)}",
        "emol": 2,
        "E0": 2.01
    },
    {
        "id": 30,
        "equation": "\\rm {F_{2}}_{(g)} + 2e^- \\longrightarrow {2F^-}_{(aq)}",
        "molLHS": 1,
        "molRHS": 2,
        "LHS": "\\rm {F_{2}}_{(g)}",
        "RHS": "\\rm {F^{-}}_{(aq)}",
        "emol": 2,
        "E0": 2.87
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
half1lhs = halfeqn1.LHS.match(/\w+((?=_)|(?=\^))/)[0];
half2lhs = halfeqn2.LHS.match(/\w+((?=_)|(?=\^))/)[0];
console.log(id1,id2);
console.log(half1lhs,half2lhs);
if(half1lhs===half2lhs){
  while (id1 == id2) {
    id1 = Math.floor(Math.random()*(max - min)) + min;
    id2 = Math.floor(Math.random()*(max - min)) + min;
  }
}
console.log("If statement");
console.log(id1,id2);
console.log(half1lhs,half2lhs);
//Put all the required elements of each half equation into a string array ready for concatenation
heqn1 = eqncomp(halfeqn1);
heqn2 = eqncomp(halfeqn2);
//Sort out all the coefficients
adjustedeqn1coefficients = [halfeqn1["molLHS"] * halfeqn2["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn1["molRHS"] * halfeqn2["emol"]];
adjustedeqn2coefficients = [halfeqn2["molLHS"] * halfeqn1["emol"], halfeqn1["emol"] * halfeqn2["emol"], halfeqn2["molRHS"] * halfeqn1["emol"]];
HCF = gcd(halfeqn1["emol"],halfeqn2["emol"]); 
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
output = {
  "halfeqn1": heqn1,
  "halfeqn2": heqn2,
  "halfeqn1E0": halfeqn1["E0"],
  "halfeqn2E0": halfeqn2["E0"],
  "reduction_potential": reduction_potential,
  "oxidation_potential": oxidation_potential, 
  "finaleqn": finaleqn,
  "reductioneqn": reduction_eqn,
  "oxidationeqn": oxidation_eqn,
  "emol": emolprod/HCF, 
  "DeltaE" : DeltaE
};
console.log(output)
