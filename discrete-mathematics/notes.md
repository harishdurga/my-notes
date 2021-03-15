# Discrete Mathematics
Discrete mathematics is the study of mathematical structures that are fundamentally discrete rather than continuous.
## Sets
A set is a collection of different elements. Change in the order of elements or repitetion of elements won't change the set.
Ex: set of natural numbers
### Types Of Representations:
#### Roaster or Tabular Representation:
Ex: A={a,e,i,o,u}, B={1,3,5,7,9}
#### Set Builder Representation:
The set is defined by specifying a property that elements of the set have in common.

Ex: A={x:x is a vowel in English alphabet}, B={x:0<x<=9} and x%2 ≠ 0}, C={x:0<x<=10 and x%2==0}

If an element x belongs to a set S the we write as x `x ∈ S` and if x doesn't belong to S then `x ∉ S`.
#### Cardinality Of A Set:
Also called as `Cardinal number` denoted as `|S|` where S is a set tell the size of the set or number of elements present in the set. 
Example − |{1,4,3,5}| = 4, |{1,2,3,4,5,…}|=∞

#### Injective, Surjective and Bijective Functions:
[<img src="https://www.mathsisfun.com/sets/images/function-mapping.svg">](https://www.mathsisfun.com/sets/injective-surjective-bijective.html)
##### General Function:
If A and B are two sets, not a single element in A is linked to more than one element in B, but one element in B can be linked to many elements in A.
##### Injective Function:
A strict one to one relation between the elements of set A and B.
##### Surjective Function:
All the elements in B are mapped to atleast one element in set A. Not one element is left unmapped.
##### Bijective Function:
A function is called bijective if it is both injective and surjective. which means all the elements in set B are mapped and it is a one to one mapping. There can be unmapped elements in A but not in B.
- |X|=|Y| with same cardinality a bijective function can exist.
- |X|≤|Y| injective function
- |X|<|Y| cannot be bijective
- If |X|≤|Y|  and |X|≥|Y| then |X|=|Y| commonly reffered as equivalent sets.
#### Types Of Sets:
##### Finite Set:
A set with definite number of elements. Ex: A = {1,2,3,4}
##### Infinite Set:
A set with indefinite number of elements. Ex: A = {x:x∈N, x >10}
##### Subset:
If every element of X is present in Y the X is subset of Y denoted as `X⊆Y` Ex: Y = {1,2,3,4,5} and X = {1,2}
##### Proper Subset:
Denoted as X⊂Y. X is a proper subset of Y when Y contains every element of X and even more. Ex:Y = {1,2,3,4,5} and X = {1,2}
##### Universal Set
This set conatins all the elements in all sets in an application. This is denoted by `U`.
##### Empty Or Null Set:
Cardinality zero and denoted by `∅`
##### Singleton Set or Unit Set:
With only one element. Cardinality is one. Ex: {8}
##### Equal Set:
When X set contains same and equal number of elements as Y the X and Y are equal sets.
##### Equivalent Set:
Cardinality of sets X and Y is same but not the same elements.
##### Overlapping Set:
Atleast one common element in A and B sets. In case of overlapping sets:
- n(A∪B)=n(A)+n(B)−n(A∩B) 
- n(A∪B)=n(A−B)+n(B−A)+n(A∩B)
- n(A)=n(A−B)+n(A∩B)
- n(B)=n(B−A)+n(A∩B)
##### Disjoint Set:
Not atleast one common element. So
- n(A∩B)=∅ 
- n(A∪B)=n(A)+n(B)
### Venn Diagrams
#### Union:
[<img src="https://www.tutorialspoint.com/discrete_mathematics/images/set_union.jpg">](https://www.tutorialspoint.com/discrete_mathematics/images/set_union.jpg)

A∪B={x|x∈A OR x∈B}

Ex: A={10,11,12,13},B = {13,14,15} and A∪B={10,11,12,13,14,15}
#### Intersection:
[<img src="https://www.tutorialspoint.com/discrete_mathematics/images/set_intersection.jpg">](https://www.tutorialspoint.com/discrete_mathematics/images/set_intersection.jpg)

A∩B={x|x∈A AND x∈B}

A={11,12,13}  and B={13,14,15}, then A∩B={13}
#### Difference/ Relative Complement:
[<img src="https://www.tutorialspoint.com/discrete_mathematics/images/set_difference.jpg">](https://www.tutorialspoint.com/discrete_mathematics/images/set_difference.jpg)

A−B={x|x∈A AND x∉B}

A={10,11,12,13}  and B={13,14,15}, then (A−B)={10,11,12} and (B−A)={14,15}

#### Complement of a Set:
A′={x|x∉A}

A′=(U−A) where U is a universal set

#### Cartesian Product / Cross Product:
If A={a,b}  and B={1,2}
A×B={(a,1),(a,2),(b,1),(b,2)},
B×A={(1,a),(1,b),(2,a),(2,b)}


