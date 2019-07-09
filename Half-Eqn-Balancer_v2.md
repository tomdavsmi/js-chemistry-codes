## Half-Equation Balancer v2.0
This is a complete rewrite of v1.0 which completely changes pretty much every aspect of the script's behaviour. 
It still selects two random half-equations from the `json`, but now it constructs *both* the spontaneous and non-spontaneous process then randomly choses between them (a number between 1 and 2 so in theory should be 50/50). From here it then sets the reduction & oxidation equations, and calculates Delta E by 
    E<sub>cell</sub> = E<sub>RED</sub> - E<sub>OX</sub>
where E<sub>RED</sub> and E<sub>OX</sub> are set according to their behaviour in the full cell equation. 

### How it Works 
Firstly the code generates two random numbers, checking that they are not equal. Then it extracts the half-equations from `half-equations.json` whose ID field matches the generated numbers. Using RegExp the element symbols are extracted from the `LHS` field for each half equation. These are then compared, and if they are equal (i.e. both half-equations involve Fe) new numbers are generated. This continues until; a) both IDs are different, and b) both half-equations are based in different elements. 

Half equations are then stitched together from the `molLHS`, `LHS`, `emol`, `molRHS` and `RHS` keys into a string array. N.B. at no point is the `equation` field used in code! These arrays are then written into the output dictionary and nothing further is done with them. 
Next the coefficients are all sorted out;
1) `molRHS` and `molLHS` for each half equation are multiplied by the *opposite* half-equation's `emol`. 
2) These two new arrays are combined into one, and each element of it divided by the highest common factor of the two `emol` values. 
3) Arrays are separated into their original forms, and a loop iterates over them converting any coefficient = 1 into an empty string, thereby essentially removing it from the equation. This is purely an aesthetic thing because although it makes no difference to the chemistry, it looks slightly unnatural (to me, at least). 

A `finalid` is generated which has a value of either 1 or 2, and it is this which determines which of the two possible cell equations are given to the student. One cell equation has half-equation 1 running as written and half-equation 2 running backwards, and the other has the opposite. Oxidation and reduction equations are composed based on this and are purely for use in the advice section of a question --- they serve no mechanical purpose. 

### The Output
The output is again a key:pair dictionary, which contains the following values:
- `halfeqn1`: a string array containing all the elements of half-equation 1 (it is *not* a complete equation string, it contains the `molLHS`, `LHS`, `emol`, `molRHS` and `RHS` keys)
- `halfeqn2`: same as above, just with the second half-equation
- `halfeqn1E0` and `halfeqn2E0`: the electrode potential for each half equation
- `finaleqn`: the cell equation which has been constructed and then randomly chosen (see above for detail)
- `reductioneqn`: the equation which corresponds to reduction. Contains the following keys; `coeffLHS`, `LHS`,`emolprod`,`coeffRHS`& `RHS`, where `emolprod` is the product of the two `emol`values. 
- `oxidationeqn`: the equation which corresponds to oxidation, keys are the same as above but in reverse order because the reaction is running backwards compared to the way it is written; `coeffRHS`, `RHS`,`emolprod`,`coeffLHS`& `LHS`
- `reduction_potential` & `oxidation_potential`: potentials for reduction and oxidation respectively. Used to calculate cell potential. N.B. these are the same potentials as `halfeqn1E0/halfeqn2E0` only classified as either reduction of oxidation.
- `emol`: moles of electrons transferred in the balanced cell equation
- `DeltaE`: the standard electrode potential for the cell

### Scope and Usage
Any question which involves half cells **and** requires a balanced cell equation can use this code to provide just that. There are currently 30 half-equations in the `half-equations.json` file, which gives about 800 possible combinations. This gives a good base for further randomisation using other components of the question. Using the `emol` and `DeltaE` keys as well as the individual oxidation/reduction potentials it is possible to ask the student to perform a wide range of electrochemical questions. 

In order to use this in a question there must be another a variable containing the `json` data - this can be copied from the GitHub and simply pasted into a variable set to "JSON data". NUMBAS will convert this to a list. 

The code for the script must be copied into the "Extensions and Scripts" section, and set up as follows;
- name --- can be anything, just remember it for later
- language --- javascript
- type -- click the plus symbol and a box should appear. In the text field enter "potentials" and in the drop-down select "list". To the right of the arrow select "dict" in the dropdown. 
- Next paste the code into the box and all should be set!

In a new variable (named anything you like and again remember it, I call it "output" and that's what I'll be using in this section), enter the following jme code replacing "json_data" with what you called your variable containing the potentials data, and replacing "fnname" with whatever you called the script earlier on. 

    fnname(json_data)
and this should turn the variable into a "dict with 11 entries". To access data from this dictionary in either the question or in other variables, simply call:

    output["key"]
where `key` is one of the keys listed in the "Output" section. This will work for any keys *apart from* `halfeqn1/halfeqn2/reductioneqn/oxidationeqn` where the syntax is a little more complex. 

These keys contain lists, so calling `output["halfeqn1"]` will return a list of values. To access individual parts of this list we need to use their index, and to do this we put the index in square brackets after the list call:

    output["halfeqn1"][0]
will acess the first element in the list,

    output["halfeqn1"][1]
the second and so on and so forth. This syntax allows the different components of the equations to be used as the end-user sees fit. The components of each string array differ slightly, but there is more detail on that in the "Output" section. All equations need appropriate arrows/ plus signs adding manually, so displaying `halfeqn1` to the student requires a code that looks something like;

    \var{output["halfeqn1"][0]}\var{latex(output["halfeqn1"][1])} + \var{output["halfeqn1"][2]} \rm e^{-} &\leftrightharpoons\var{output["halfeqn1"][3]}\var{latex(output["halfeqn1"][4])}
(remembering that every chemical formulae is written in LaTeX notation, so both math mode and the `latex()` JME function are required). The only equation which is join as a string is `finaleqn` which can be displayed by simple calling;

    \[\var{latex(output["finaleqn"])}\]
again using math mode and `latex()`. 
