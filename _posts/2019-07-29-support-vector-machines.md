---
layout: post
title: I Made a Support Vector Machine!
date: 2018-07-29 08:00:00 +0100
category: projects
---

Find the code here.

## Motivation
As part my Numerical Optimisation course, I had to create a
Support Vector Machine without using any machine learning libraries.
I ended up completing the project in a bit of a rush, but once
my schedule cleared I was glad to return to the topic to have a
closer look at what was actually happening.

This post will explain the basic theory of Support Vector Machines,
and I will briefly outline how I implemented one in Python 
using the CVXOPT solver library.

## Some Background Theory
A Support Vector Machine (SVM) is a well-established supervised
machine learning technique used for binary classification (_i.e._ 
only two possible classes). It can also be extended for regression,
but I will not cover that here.

The basic principal of an SVM is that it mathematically draws a line
that separates two types of points. Say your dataset has the following
form: each data point has an 
<img src="https://latex.codecogs.com/gif.latex?x_1"/> <!-- x_1 -->
value, 
<img src="https://latex.codecogs.com/gif.latex?x_2"/> <!-- x_2 -->
value and one of two classes (either type _X_ or type _O_), and we have six
entries. The SVM will determine the location of the line that bests separates 
the two sets of points. When we then have new data point with a known
<img src="https://latex.codecogs.com/gif.latex?x_1"/> <!-- x_1 -->
and 
<img src="https://latex.codecogs.com/gif.latex?x_2"/> <!-- x_2 -->
but an unknown class, we can predict what the class of the point would be
by seeing on which side of the line it is.

```insert picture``` 
 <!-- diagram of 3 x's and 3 o's and a line separating them + 
 arrows pointing to what is what (including an arrow pointing
 at an unknown point and predicting what it is -->

### Translating It into Mathematics
The mathematical question to ask is _"where to place the line?"_ As a quick
recap, a line in a 2-D space is defined by all points
<img src="https://latex.codecogs.com/gif.latex?x_1"/> <!-- x_1 -->
and
<img src="https://latex.codecogs.com/gif.latex?x_2"/> <!-- x_2 -->
that satisfy

<p style="text-align: center;">
<img src="https://latex.codecogs.com/gif.latex?w&space;\cdot&space;x&space;&plus;&space;b&space;=&space;0" title="w \cdot x + b = 0" />
</p>

where
<img src="https://latex.codecogs.com/gif.latex?w"/> <!-- w -->
and
<img src="https://latex.codecogs.com/gif.latex?b"/> <!-- b -->
are constants. From this we can designate points as being either "above" or
"below" the line, in the sense that the coordinates of this point when put into
the equation
<img src="https://latex.codecogs.com/gif.latex?w&space;\cdot&space;x&space;&plus;&space;b" title="w \cdot x + b" />
give either a positive (above) or negative (below) number.

We will now place three parallel lines, each with the same 
<img src="https://latex.codecogs.com/gif.latex?w"/> <!-- w -->
and
<img src="https://latex.codecogs.com/gif.latex?b"/> <!-- b -->, except that the
right-hand side will be different.

We will place one line that will intersect the point in group _O_ that is 
closest to group _X_, which will have the equation:

<p style="text-align: center;">
<img src="https://latex.codecogs.com/gif.latex?w&space;\cdot&space;x&space;&plus;&space;b&space;=&space;-1" title="w \cdot x + b = -1" />
</p>

Subsequently every point of the group _O_ will be either on or beneath this line, such that they satisfy this condition:

...

The second line will intersect the point in group _X_ that is closest to group
_O_, and this will have the equation:

<p style="text-align: center;">
<img src="https://latex.codecogs.com/gif.latex?w&space;\cdot&space;x&space;&plus;&space;b&space;=&space;1" title="w \cdot x + b = 1" />
</p>

Similarly to above, the points in group _X_ will be either on or above this line,
such that they satisfy this condition:

...

The third line will be perfectly equidistant from these other two lines and we will define it with this equation:

<p style="text-align: center;">
<img src="https://latex.codecogs.com/gif.latex?w&space;\cdot&space;x&space;&plus;&space;b&space;=&space;0" title="w \cdot x + b = 0" />
</p>

Some algebra shows that the distance between both of the outer lines to the center one is
<a href="https://www.codecogs.com/eqnedit.php?latex=\frac{1}{\left&space;\|&space;w&space;\right&space;\|}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\frac{1}{\left&space;\|&space;w&space;\right&space;\|}" title="\frac{1}{\left \| w \right \|}" /></a>
, which shows that the distance between the lines varies with their slope (the one). In 
order to best divide the two groups of points, we want to maximise this distance,
and because
||w||
is in the denominator, then we can achieve our maximasation by _minimising_
||w||
.

Furthermore, to aid us in this effort, since quadratic problems tend to be easier to
solve, we will pose our minimisation problem as
1/2||w|^2
because, conveniently the minimsation solution of this problem is the same as for
||w||
.

We also need to keep in mind the inequalities we defined earlier. By associating
the value
y_i = 1
to each point in the group _X_ that is above the line, and the value
y_i = -1
to each point in the group _O_ that is below the line, we can express both inequalities in a single equation as:

...

Finally, these formulas can easily be expanded to more than two dimensions by
keeping in mind that
w
and
x
can have any number of terms and the mathematics used to derive these equations
remains unchanged. In 2-D, the division boundary is a line; in 3-D it will be a flat plane; with more than three dimensions, it becomes a _hyperplane_. As a more general term, the boundary is referred to as the decision surface.

Bringing all these points together, lets us express the essence of a Support Vector Machine algorithm, which is to find the terms
w
and
b,
that solve this problem:

...

with
b
defined subsequently from the original equation.

### The Dual Problem

Unfortunately, the above expression of the SVM is not practical to solve in its
current form. Thankfully, a well-studied methodology exists to make its
resolution more efficient. This is to pose the problem in its Dual Lagrangian form.

_dual lagrangian equation_

Where
_\alpha_
is 



## My SVM module
Organisation of modules,

Solver I use CVXOPT

Swap out solvers: LIBSVM, SK-LEARN, custom SMO

## Performance Evaluation
Speed
Accuracy in classification
Note changes in digits when changing scale of data

## Room for Improvement
Implement an SMO
Scaling?
Implementing a solver in python
