# js-chemistry-codes
Scripts written in JS for doing random bits of chemistry in the Numbas system.
**No affiliation with the official Numbas project/development team**

The codes currently stored here are 
- `Half-eqn-balancer v1`: an early attempt to create a code to randomly generate and balance cell equations, based on a list of random half-equations
- `Half-eqn-balancer v2`: a complete rewrite of v1 which changed the aproach to generating the equations and increased the flexibility of the code. Also added a few extra features to make questions more realistic.
- `basis_set_praser+fn_calculator.js`: a code which can take STO-nG and l=mnoG (Pople split-valence) type basis sets, and calculate how many basis functions would be generated for model a simple organic molecule (containing atoms from, at present, the top row only). Can deal with * and ** variants, and can currently parse +/++ variants but these are not taken into account for calcualtions. 
-`Random_Organic_Molecular_Formulae.js1`: generates a randomised organic compound using the degrees of unsaturation formula. Specifically built for the basis set calculator. Generates only the molecular formula and makes no attempt at generating connectivity. 

## half-equations.json
The `half-equations.json` file contains a list of 30 simple electrochemical half-equations. By simple I refer to an equation in which a sigle species gains elctrons to product a single reduced species. **All equations in this document are written as reductions** i.e. M<sup>+</sup> + e<sup>-</sup> -> M. If oxidations are required then simply flip the order in which you call elements/concatenate. 

All keys which contain chemical species are formatted with LaTeX so in order to display them in questions the `latex(...)` fuction is necessary;

        \[ 
          \var{latex(equation)} 
        \]
The following keys are held for each equation;
- `id`: an integer which allows them to be picked randomly. Must be entered manually and adjusted if equations are added/removed, and must also be continuous
- `equation`: the half equation
- `molLHS`: mole equivalents of the left-hand side species
- `molRHS`: mole equivalents of the right-hand side species
- `LHS`: the left-hand side species, rendered with LaTeX
- `RHS`: the right-hand side species, " "
- `emol`: the mole equivalents of electrons tranferred during the process
- `E0`: the electrode potetial of the half-equation

This file (in its current iteration, v1.0 at the time of writing) has 30 half-equations, allowing for 870 combinations (I think). This should be sufficiently random such that no-one in a group should have the same question.

**N.B. not all codes use all the fields from this json. Check the section for each script for more detail!**

