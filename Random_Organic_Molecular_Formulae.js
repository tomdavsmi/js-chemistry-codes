var Cmin = 3,
    Cmax = 12,
    Hn = 0,
    halogenated = false,
    Nmin = 1,
    Nmax = 3,
    Omin = 1,
    Omax = 3,
    On,Nn,Xn,Cn,Hn;
math = Numbas.math;
X = "F";
Cn = Numbas.math.random([Cmin,Cmax,1])
DOU = math.randomint(4);
rand = math.randomint(4);
if (rand ==0) {
  Hn = (-2*DOU)+2+(2*Cn)
  return ["C",Cn,"H",Hn].join("")
}
else if (rand ==1 ){
  Xn = Numbas.math.random([1,Hn/5,1])
  Hn = (-2*DOU)+2+(2*Cn)-Xn
  return ["C",Cn,"H",Hn,X,Xn].join("")
}
else if (rand ==2) {
  Xn = Numbas.math.random([1,Hn/4,1])
  Hn = (-2*DOU)+2+(2*Cn)-Xn
  On = math.random([Omin,Omax,1])
  return ["C",Cn,"H",Hn,"O",On,X,Xn].join("")
}
else if (rand ==3) {
  Xn = Numbas.math.random([1,Hn/5,1])
  Nn = math.random([Nmin,Nmax,1]);
  Hn = (-2*DOU) + 2 + (2*Cn) - Xn + Nn
  return ["C",Cn,"H",Hn,X,Xn,"N",Nn].join("")
}
else if (rand==4) {
  Xn = Numbas.math.random([1,Hn/5,1])
  On = math.random([Omin,Omax,1]);
  Nn = math.random([Nmin,Nmax,1]);
  Hn = (-2*DOU) + 2 + (2*Cn) - Xn + Nn
  return ["C",Cn,"H",Hn,X,Xn,"O",On,"N",Nn].join("")
}
