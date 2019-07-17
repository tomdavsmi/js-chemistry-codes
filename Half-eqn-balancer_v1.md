## Redox Equation Balancer v1
This is a script designed to take two half equations (chosen at random) from the `half-equations.json` file, and ask the student to perform some kind of calculation with them. 

It randomly selects two half equations (ensuring that id1 doesn't equal id2) and then goes on to construct the spontenous cell reaction from them. This is a simplification of reality but for basic question it should suffice. It then works out the overall cell equation by taking the most positive electrode potential (i.e. the *most* spontaneous reduction) and taking away the least positive electrode potential (i.e. the *least* spontaneous reduction).

### How it works

In terms of code, it is far from being the most elegant solution to a non-trival problem. 

Initially we define all the variables we need (and there are a few). 

The first main section deals with generating two random numbers, which are then used as the ID numbers to pull half equations from the `json`. The largest number this can generate is the length of the json file -- i.e. how many ID numbers there are. Random number generation in javascript also seems to have some oddities, hence the need for the floor function and the `(max-min) + min` stuff. 

Next the `find` functions use the generated IDs to pull two half-equations from the json file and assign them to `halfeqn1` and `halfeqn2` (these are both dictionaries with the same keys as the input json). Combining the `molLHS`, `LHS`, `emol`, `molRHS` and `RHS` keys from each half-equation dictionary gives an array of strings. 

Coefficients are then balanced for the equation by multiplying each `molLHS` & `molRHS` by the *opposite* `emol`. The two coefficients from each equation are put together in an array and then cancelled by dividing every element by the highest common factor. Coefficients are then extracted out back into the original arrays. The new arrays are then iterated over to replace any coefficent = 1 with an empty string (thereby deleting it). `DeltaE` is then calculated by taking the least positive E0 away from the most positive E0. 

Finally we construct the final equations based on which halfeqn has the most positive E0, because the half equation with the most positive E0 will run forward as a reduction. 

### The output

The script returns a dictionary of values which may be used a various points in the quesion. The output dictionary returns the following keys;
- `halfeqn1` & `halfeqn2`: strings containing the half-equations based on the string arrays constructed from the indivual elements
- `halfeqn1E0` & `halfeqn2E0`: the respective electrode potentials for each half-equation
- `finaleqn`: a string containing the most spontaneous cell equation (i.e. the one where the most spontaneous reduction runs forwards)
- `emol`: the number of moles of electrons in the balanced overall equation
- `DeltaE`: the overall cell equation

### Randomisation and Scope

This code will produce approximately 800 half-cell combinations in its current form. Right off the bat this gives a very large degree of randomisation in the cell potential. Any quantity derived from cell potential will therefore have this degree of randomisation before considering any other variables. 
