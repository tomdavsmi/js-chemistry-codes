chem = Numbas.extensions.chemistry
var Basisset = function Basisset(data) {
  this.settype = data.settype;
  this.corefunctions = data.core;
  this.valencefunctions = data.valence;
  this.polarisationheavy = data.pol;
  this.polarisationall = data.polall;
  this.diffuseheavy = data.diff;
  this.diffuseall = data.diffall;
  this.gauspercore = data.gauspercore
  this.gausperval = data.gausperval
}
Basisset.prototype = {
  basisfunctions: function(formula) {
    return calcfns(this,formula);
  }
}
function calcfns(basisset,formula) {
    var outdict = {},totalfns=0;
    orbitalnos = element_orbitals(formula)
    atom_counts = new chem.Formula(chem.parse_formula(formula)).atom_counts();
    counts_length = Object.keys(counts).length
    for (i=0;i<counts_length;i++){
      loopelement = Object.keys(counts)[i]
      totalcore = Object.values(orbitalnos)[i][0] * Object.values(counts)[i] * basisset.corefunctions;
      totalval = Object.values(orbitalnos)[i][1] * Object.values(counts)[i] * basisset.valencefunctions;
     outdict[loopelement] = [totalcore,totalval] 
     totalfns += totalcore + totalval
  }
  if (basisset.polarisationall == true) {
       //Polarisation on everything, 3 on H, 6 on heavy
       for (i=0;i<Object.keys(atom_counts).length;i++) {
         if (Object.keys(atom_counts)[i] == "H") {
           totalfns += 3 *atom_counts.H
         } else {
           totalfns += 6 *Object.values(atom_counts)[i]         
         }
       }
     } else if (basisset.polarisationheavy== true ) {
       //Polarisation only on non-H
       for (i=0;i<Object.keys(atom_counts).length;i++) {
         if (Object.keys(atom_counts)[i] != "H") {
           totalfns += 6 *Object.values(atom_counts)[i]         
         }
       }
     }
  return totalfns
}

function element_orbitals(formula) {
  var i,outdict={};
  counts = new chem.Formula(chem.parse_formula(formula)).atom_counts();
  elements_incmpd = Object.keys(counts);
  counts_length = Object.keys(counts).length
  for (i=0;i<counts_length;i++){
    loopelement = elements_incmpd[i];
    loopconfig = new chem.Atom(chem.element_with_symbol(loopelement)).data.electronicConfiguration.toString();
    re = /\[[A-Za-z]{1,}\]/g
    if (re.test(loopconfig) == true){
      //Noble element present
      noble = loopconfig.match(re).toString().replace("[","").replace("]","");
      nobleconfig = new chem.Atom(chem.element_with_symbol(noble)).data.electronicConfiguration;
      noble_scount = (nobleconfig.match(/s/g) || []).length
      noble_pcount = (nobleconfig.match(/p/g) || []).length*3
      corecount = noble_scount + noble_pcount
    } else {
      corecount = 0;
    }
    loopelement_scount = (loopconfig.match(/s/g) || []).length
    loopelement_pcount = (loopconfig.match(/p/g) || []).length*3
    valencecount = loopelement_scount + loopelement_pcount 
    outdict[loopelement] = [corecount,valencecount]
  } 
  return outdict
}
function parse_basis(str) {
  switch (str.charAt(0)){
    case 'S':
      var data = {};
      data.settype = "Slater";
      var n = parseInt(str.match(/[0-9]/g));
      data.core = str.match(/[0-9]/g).length;
      data.valence = str.match(/[0-9]/g).length;
      data.gauspercore = n;
      data.gausperval = n;
      data.pol = false;
      data.polall = false;
      data.diff = false;
      data.diffall = false;
      return data
      break;
    case '3':
    case '4':
    case '6':
      var data = {},valfns;
      data.settype = "Split-valence";
      data.core = str.match(/[0-9](?=\-)/g).length
      data.gauspercore = parseInt(str.match(/[0-9](?=\-)/g))
      data.valence = str.match(/[0-9]{2,}/g).toString().length
      for (i=0;i<str.match(/[0-9]{2,}/g).toString().length;i++) {
        valfns += parseInt(str.match(/[0-9]{2,}/g).toString()[i]);
      }
      data.gausperval = valfns
      if (/\*/g.test(str) != false) {
        if (str.match(/\*/g).length == 2) {
          data.polall = true;
          data.pol = true;
        } else if (str.match(/\*/g).length == 1) {
          data.pol = true;
          data.polall = false;
        } 
      } else {
        data.pol = false;
        data.polall = false;
      }
      if (/\+/g.test(str) != false) {
        if (str.match(/\+/g).length == 2) {
          data.diffall = true;
          data.diff = true;
        } else if (str.match(/\+/g).length == 1) {
          data.diff = true;
          data.diffall = false;
        }
      } else {
        data.diff = false;
        data.diffall = false;
      }
      return data
      break;
  }
}
thisbset={};
thisbset = new Basisset(parse_basis(bset));
return thisbset.basisfunctions(formula);

