export const solutions = [
    {
        id: 1,
        answer: "112 cups of tropical punch",
        solutions: [
            "The recipe calls for 3 cups of coconut milk, and because you have 30 cups, that means you have enough coconut milk for 10 batches.  However, in the same way, you only have enough orange juice for 8 batches.  Orange juice is the limiting ingredient (check the pineapple juice on your own), so we can only match a maximum of 8 batches if we follow the recipe.  Each batch makes 6 + 5 + 3 = 14 cups of punch, so we can make a total 112 cups of tropical punch.  There will be 6 cups of coconut milk and 22 cups of pineapple juice left over.",
        ],
        links: null
    },
    {
        id: 2,
        answer: "33 minutes",
        solutions: [
            "Cutting a log into 3 pieces means you're making TWO cuts.  If two cuts take 6 minutes, then each cut takes 3 minutes.  If you want to cut another log into 12 pieces, then you must make 11 cuts.  11 cuts at 3 minutes per cut gives 33 minutes for the whole task.",
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?v=hiCu-3YNSPQ",
                text: "Mind Your Decisions (Youtube)"
            }
        ]
    },
    {
        id: 3,
        answer: "20 minutes",
        solutions: [
            "Together, Dave and Edith will mow 3 lawns in 1 hour.  So each lawn will take them 1/3 of an hour, which is 20 minutes.",
            "In one minute, Dave mows 1/60th of the lawn, and Edith mows 1/30th.  So in one minute, a total of 1/60 + 1/30 = 1/20th of the lawn is mown, which means that in 20 minutes, the entire lawn will be mown.",
            "Cut the lawn into three equal strips.  Since Edith works twice as fast, she will mow two strips in the same time it takes Dave to mow one.  This amount of time is 20 minutes, because each strip will take Edith 10 minutes (30/3 = 10) and each strip will take Dave 20 minutes (60/3 = 20).  So Dave and Edith both work for 20 minutes and all three strips get mown.  You do NOT add Dave's time working to Edith's because they work simultaneously.",
            "In 15 minutes, Edith mows half of the lawn and Dave mows another quarter, leaving one fourth of the lawn remaining unmown. In another 15/4 = 3.75 minutes, Edith mows another half of the remaining quarter, and Dave mows another quarter of the remainder, which leaves 1/16th of the original lawn unmown.  In another 15/16 = 0.9325 minutes, Edith mows another half of the remaining 16th of the lawn, while Dave mows another quarter of the remainder, which leaves 1/64 of the lawn remaining.  If they continue in this way, they will eventually mow the entire lawn (google Zeno's paradox) and the total time spent will be: $15\\left(1 + \\frac{1}{4} + \\frac{1}{16} + \\frac{1}{64} + ...\\right) = 15\\left(\\frac{1}{1-1/4}\\right) = 15\\left(\\frac{4}{3}\\right)$ = 20 minutes.  Note: This is more of a joke solution than a serious one, but it arose out of watching so many students begin by dividing the lawn in half.  Some persisted far enough in this approach that we arrived at this solution.  See the following entry for a more serious solution that begins in the same way.",
            "Divide the lawn in half.  Edith will mow her half in 15 minutes, but Dave will only finish half of his half in that time because he works at half her pace. So in 15 minutes, 3/4 of the lawn will be mown.  Which means that in 5 minutes, 1/4 of the lawn will be mown.  So in 20 minutes, the lawn will be finished."
        ],
        links: null
    },
    {
        id: 4,
        answer: "253 red marbles",
        solutions: [
            "First take and equal number of red and blue, so we have 250 of each.  However, we want to have 6 more red than blue, so we replace <em>three</em> of the blue marbles with red ones.  Then there will be 247 blue and 253 red; 253 - 247 = 6 more red than blue."
        ],
        links: null
    },
    {
        id: 5,
        answer: "99 red marbles",
        solutions: [
            "Take several sacks that can fit many marbles.  We will place an equal number of marbles into each sack.  First, place all of the blue marbles into the first sack.  Take three more sacks and divide the red marbles evenly between them.  Since there are three times as many red as blue, each of the red sacks will have an equal number of marbles as the blue sack.  Finally, take 6 more sacks and divide the yellow marbles evenly among them.  Since we have twice as many yellow marbles as red, every sack will have the same number of marbles in them.  We have evenly divided the 330 marbles into a total of 10 sacks, so each sack must contain 33 marbles.  There are 3 red sacks, so we have a total of 3 $\\times$ 33 = 99 red marbles."
        ],
        links: null
    },
    {
        id: 6,
        answer: "10 hours and 40 minutes",
        solutions: [
            "If 10 workers take 16 hours, then 1 worker would take 10$\\times$16 = 160 hours; it is 160 hours of work.  160 hours of work divided among 15 workers is a total of 10.666... hours, or 10 hours and 40 minutes.",
        ],
        links: null
    },
    {
        id: 7,
        answer: "5050 seats",
        solutions: [
            "We add the rows in pairs.  The first row has 1 seat and the last has 100, for a total of 101 seats.  The second row has 2 seats and the second-last row has 99, for a total of 101 seats.  The third and third-last rows similarly sum to 101 seats.  Continuing in this way, each pair of rows will have a total 101 seats.  As there are 100 rows, we have 50 pairs of rows.  Thus the auditorium contains a total of 50 $\\times$ 101 = 5050 seats."
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?v=Dd81F6-Ar_0&t=60s",
                text: "Numberphile - Youtube"
            },
            {
                href: "https://www.youtube.com/watch?v=3p87wDxR0LM",
                text: "Mathematics Proofs - Youtube"
            },
            {
                href: "https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=D3F0A406F79BC3EBAA6A3EB64CED7D68?doi=10.1.1.209.85&rep=rep1&type=pdf",
                text: "Gauss's Day of Reckoning - Bryan Hayes"
            },
        ]
    },
    {
        id: 8,
        answer: "$91",
        solutions: [
            "We begin by making piles of coins. In each pile we place 25 coins: 4 nickles, 6 dimes, and 15 quarters.  The ratios given ensure that we will run out of each type of coin at the same time. For example, if there are 3 dimes for every 2 nickels, then we will have 6 dimes for every 4 nickels, so we will run out of nickels at the same time we run out of dimes.  Since there are 500 coins in total and each pile has 25 coins, there must be 20 piles.  Each pile is worth $4.55, so the altogether the piggy bank has 91 dollars in it."
        ],
        links: null
    },
    {
        id: 11,
        answer: "12, 13, or 14 cats, depending on how the initial 6 cats kill the 6 rats.",
        solutions: [
            "Several different solutions are well-explained in chapter 1 of the book <em>Lewis Carroll's Cats and Rats</em> by Yossi Elran.  Check out the link below."
        ],
        links: [
            {
                href: "https://www.worldscientific.com/doi/pdf/10.1142/9789811233975_0001",
                text: "Lewis Carroll's Cats and Rats - Yossi Elran"
            }
        ]
    },
    {
        id: 12,
        answer: "150 cm",
        solutions: [
            "Imagine, instead, that we have two cats and that a 'turtle' is actually just a cat who is lying down.  We begin with two cats sitting upright: one on the table and one on the floor.  The distance between their ear tips is precisely equal to the height of the table.  Imagine that the floor cat lies down: the distance between the ear tips increases by some amount 'x' to 170cm.  Now imagine the floor cat sits up again and restores the distance between their ear tips to again equal the height of the table.  If the table cat now lies down, the distance between their ear tips <em>decreases by that same amount 'x' </em> to a distane of 130cm. So evidently, the height of the table is directly between 130cm and 170cm: the table must be 150cm tall.  Note that by this approach, we simultaneously learn that the cat is 20cm taller than the turtle.",
            "For two other solutions, visit the link below."
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?app=desktop&v=BPRueCu3fXU",
                text: "Mind Your Decisions - Youtube"
            }
        ]
    },
    {
        id: 13,
        answer: "2/3rds of the bottle is filled",
        solutions: [
            "Imagine that we have a second bottle with the same volume, but doesn't taper at the top (it will thus be shorter than the given bottle, of course).  We pour the same amount of water into our second bottle.  The water again fills it up to the 12cm mark.  It is also easy to see that because the volume of air in both bottles must be equal, there must be 6cm remaining to the top of the bottle (we can see that is how much air is in the given bottle when we flip it upside down).  So both bottles are 2/3rds filled."
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?v=L9XxPr3xuQU",
                text: "Mind Your Decisions - Youtube"
            }
        ]
    },
    {
        id: 14,
        answer: "His route must begin and end at intersections C and D (in either order)",
        solutions: [
            'We will call continuous sections of road that are uninterrupted by intersections "segments." Any valid path through the neighborhood will visit each segment at least once (or else the postman would miss some houses on his route).  A shortest path through the neighborhood, then, would ideally visit each segment exactly once (no more than is needed). It is not necessarily clear from the outset, however, that this is possible.  We will demonstrate that it is indeed possible and give a simple general criterion that will help decide whether it is possible for any other neighborhood map (even ones far more complicated than this).  <br></br> Note that intersections C and D each join 3 road segments, while A, B, and E each join 4. Whenever the postman passes through an intersection, he enters on one segment and then leaves on another.  So when he passes through an intersection, he uses up two of its segments. This means he can pass through each of A, B, and E exactly twice, but he cannot pass through each of C and D more than once.  When he passes through C, for example, he uses up two of its 3 segments, leaving only one segment untraveled.  So the next time he visits C, he <em>must</em> stop; C must be an endpoint (or a starting point, of course).  Similarly, D must be an endpoint. You will find that it is easy to draw a route starting at C and ending at D that traverses each segment exactly once.  <br></br>Notice that what caused C and D to be endpoints was the fact that they both joined an <em>odd</em> number of segments.  Clearly, if there had more than two such intersections, it would have been impossible to draw a path that traversed each segment exactly once.  As it turns out, it is only possible to draw such a path when there are either precisely two "odd" intersections or there are none.  In the case that there are none, one can draw such a path by starting and ending at any of the given intersections. For proofs and more of the history on this problem, see the article below or research Eulerian paths.'
        ],
        links: [
            {
                href: "https://en.wikipedia.org/wiki/Eulerian_path",
                text: "Eulerian path - Wikipedia"
            },
        ]
    },
    {
        id: 15,
        answer: "It is impossible",
        solutions: [
            "Please see the links below for a full solution.  The first is a video series by Eddie Woo.  It may not be the briefest explanation you'll find out there but his energy and clarity of exposition is truly exceptional - I cannot overstate my admiration for Eddie Woo's instructional presence."
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?v=yaozMlBL7Mk&list=PL5KkMZvBpo5DHyEf5LCbd8fs_yfIIIk_8",
                text: "Eddie Woo - Youtube"
            },
            {
                href: "https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg",
                text: "Seven Bridges of Königsberg - Wikipedia"
            }
        ]
    },
    {
        id: 16,
        answer: "3",
        solutions: [
            "The fourth digit is 7.  The 8th and 12th digits are also 7.  In fact, any digit whose index is divisible by 4 is 7.  So the 320th digit is 7, which means the 321st digit is 1, and then the 322nd digit is 3."
        ],
        links: null
    },
    {
        id: 18,
        answer: "There is a 3/10 probability that you pass by Jimmy's house",
        solutions: [
            "Every shortest path consists of walking South 3 blocks and East 7 blocks; it should be easy to see that every such path can be encoded as a 'word' using the letters 'S' and 'E.'  For example, one path to the grocery store would be 'SSSEEEEEEE' - this is the route where you first walk 3 blocks South along 1st street and then walk 7 blocks East along D avenue.  Another path could go 'ESEESEESEE' Where you walk East one block on A avenue, then walk South one block on 2nd street, then walk East two blocks on B avenue, then walk South one block on 4th, then East two blocks on C, then South one block on 6th, then East two blocks on D. <br><br> Every 'shortest' path from your house to the grocery store can be encoded as a unique 10 letter 'word' consisting of 7 E's and 3 S's.  Every such word corresponds to a unique route.  There is a one-to-one correspondence between these words and the shortest paths.  <br><br> For an explanation of this next step, please see the links below.  For now, take it on good authority that the number of these words is $\\frac{10!}{(7!)(3!)}$ = 120.  There are 120 shortest paths to the grocery store.  Similarly, we can calculate that there are 6 shortest paths to Jimmy's house and there are 6 shortest paths from Jimmy's to the grocery store. There are thus 6 $\\times$ 6 = 36 shortest paths from your house to the grocery store that pass by Jimmy's house (6 choices for the first part, going to Jimmy's, then another 6 choices for the remainder of the trip to the store).  So the probability that we choose one of these 36 routes at random from a pool of 120 is 36/120 = 3/10."
        ],
        links: [
            {
                href: "",
                text: "??"
            }
        ]
    },
    {
        id: 19,
        answer: "There are 9 such paths",
        solutions: [
            "See the video below for a full explanation"
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?v=LUVKuyfpe2I&t=49s",
                text: "Zhuli - Youtube"
            }
        ]
    },
    {
        id: 20,
        answer: "10% alcohol, 90% water",
        solutions: [
            "We will refer to the 5% solution as 'solution A' and the other as 'solution B.'  We will also refer to the 2 gallons of solution A and 1 gallon of solution B as one 'batch' of mixture. If we make 100 batches of the mixture, it is easy to see that we will use 200 gallons of solution A and 100 gallons of solution B.  Since 5% of the 200 gallons of solution A is alcohol, 10 gallons of those 200 are alcohol.  Similarly because solution B is 20% alcohol, 20 gallons of alcohol are in the 100 gallons of solution B.  So in the 300 gallons of mixture, 10 + 20 = 30 gallons of the resulting solution is alcohol; it is 10% alcohol.  Since each batch is made with the same mixture, each batch will be 10% alcohol."
        ],
        links: null
    },
    {
        id: 21,
        answer: "Lockers 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100 will be open",
        solutions: [
            "see the following link for a clear explanation"
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?v=_njfdUQJqio",
                text: "100 Lockers - Youtube",
            }
        ]
    },
    {
        id: 23,
        answer: "The 4th of July must be a Friday",
        solutions: [
            "If the month starts on a Monday, for example, it will have four full weeks and then an extra Monday, Tuesday, and Wednesday because 31-28 = 3 extra days after the four full weeks.  So if it starts on a Monday, it will have 5 Mondays, 5 Tuesdays, 5 Wednesdays, and 4 of every other kind of day.  It should then be easy to see that the month must start on a Tuesday (so that it has 5 Tuesdays, Wednesdays, and Thursdays, and 4 of every other kind of day) - it is easy to verify that this is the only day it could start on.  So because July 1st is a Tuesday, then the 4th is a Friday."
        ],
        links: null
    },
    {
        id: 24,
        answer: "30 seconds",
        solutions: [
            "The first light flashes when the number of seconds elapsed is a multiple of 6; the second flashes when the time elapsed is a multiple of 10 seconds.  The least common multiple of 6 and 10 is 30 seconds."
        ],
        links: null
    },
    {
        id: 25,
        answer: "45 minutes",
        solutions: [
            "if three hoses take 60 minutes, then twelve would take 15.  If twelve hoses take 15 minutes, then four take 45.",
            "If three hoses take 60 minutes, then one would take 180 minutes.  If one hose would take 180 minutes, then four hoses would take 180/4 = 45.",
            "The pool contains 2.5 gal/min * 60 min * 3 hoses = 450 gallons of water. Four hoses working together pump 2.5 * 4 = 10 gallons per minute, so it takes 45 minutes.  Note that this solution used the flow rate, but it is clear from the above examples that the flow rate <em> was not needed.</em>"
        ],
        links: null
    },
    {
        id: 26,
        answer: "59 members",
        solutions: [
            "Honestly, the easiest way to solve this problem is via guess and check:  Start with the largest number: 20.  There could be 39, 59, 79, 99, etc. members in the choir.  It is easy to see, however, that 39 cannot be the number of members in the choir because when 39 people are arranged in groups of 12, for example, there are 3 members in the last row, not 11.  At a moments glance, we notice that 59 members is possible and that it is the smallest possible number.  The Chinese Remainder Theorem has a close connection to this problem, you may enjoy reading further about these sorts of puzzles."
        ],
        links: [
            {
                href: "https://en.wikipedia.org/wiki/Chinese_remainder_theorem",
                text: "Chinese Remainder Theorem - Wikipedia"
            }
        ]
    },
    {
        id: 29,
        answer: "20 diagonals",
        solutions: [
            "Choose a vertex and draw every possible diagonal from that vertex as a ray originating at that point.  You will have drawn 5 rays, because of the 8 vertices on the octagon there are exactly 3 to which no diagonal can be drawn: the vertex you started with and its two immediate neighbors.  Imagine repeating this same process for each of the remaining 7 vertices.  By the time you finish, you will have drawn 8 $\\times$ 5 = 40 rays.  The number of diagonals, however, is not 40.  Each diagonal, of course, will have been covered exactly twice by this process, so there are in fact 40/2 = 20 distinct diagonals appearing in our final drawing.  We note that this method clearly extends to a formula for the number of diagonals in a regular $n$-sided polygon: $\\frac{n(n-3)}{2}$",
            "Start with a square and draw its two diagonals.  Now add a new vertex bisecting one edge of the square, and deform it into a pentagon.  This process will add 3 new diagonals: 2 diagonals drawn from the new vertex to each of the two vertices not belonging to the bisected edge and a new diagonal now joining the vertices whose edge was bisected.  There are thus 2 + 3 = 5 diagonals now. Repeat this process, forming a hexagon. Doing so will produce four new diagonals: one for each of the three vertices not belonging to the bisected edge and one joining the vertices whose edge was bisected.  So the hexagon has 5 + 4 = 9 diagonals.  In this same way, we find that the heptagon has 9 + 5 = 14 diagonals, and the octagon has 14 + 6 = 20 diagonals."
        ],
        links: null
    },
    {
        id: 31,
        answer: "251 toothpicks",
        solutions: [
            "Note that while the first house requires 6 toothpicks, each <em>additional</em> house requires only an <em>additional</em> 5 toothpicks.  So in some sense, we could consider the '0th' house to be a single vertical toothpick (the lefthand 'wall' of the first house). From this perspective, if we wanted to get 3 houses, for example, we would just take that 1 toothpick and add an <em>additional</em> 3 $\\times$ 5 = 15 toothpicks to it: it takes 1 + 15 = 16 toothpicks to get 3 houses.  In the same way, to get 50 houses, we simply need 1 + 5 $\\times$ 50 = 251 toothpicks.",
            "Again note that while the first house requires 6 toothpicks, each <em>additional</em> house requires only an <em>additional</em> 5 toothpicks.  So to get 50 houses, we need 6 toothpicks for the first house and then 5 toothpicks for each of the 49 remaining houses:  6 + 5 $\\times$ 49 = 251 toothpicks.",
            "Each house, if it stood alone, would need 6 toothpicks.  So if we had 50 houses that were separate, we would need 6 $\\times$ 50 = 300 toothpicks.  However, by adjoining the houses as they are in these figures, we save toothpicks.  In fact, we save exactly 1 toothpick for each shared wall.  If there are 50 houses, then there are 49 shared walls and hence the final diagram will use 300 - 49 = 251 toothpicks.",
        ],
        links: null
    },
    {
        id: 33,
        answer: "In shape 6, the circle should be yellow",
        solutions: [
            "There are other patterns going on but I think the simplest is this:  All of the squares are red, all of the hexagons are blue, and all but ONE of the circles are yellow.  The circle in shape 6 should also be yellow."
        ],
        links: null
    },
    {
        id: 34,
        answer: "129 times",
        solutions: [
            "They start in the same location.  The first time that the two share a location on the track again is at the precise second that the slower person finishes his first lap (the faster person will be finishing her second lap).  This process will repeat with every lap completed by the slower runner, so we simply calculate: 4 laps/mile * 4 miles/hr * 8 hrs = 128 laps, plus the start of the race gives 129 times that the two runners are in the same place."
        ],
        links: null
    },
    {
        id: 35,
        answer: "41 years old",
        solutions: [
            "Five years ago, his daughter was 12.  At that time, he was three times her age, so Ben was 36.  If Ben was 36 five years ago, then he is 41 years old now."
        ],
        links: null
    },
    {
        id: 36,
        answer: "50",
        solutions: [
            "(100 - 99) + (98 - 97) + (96 - 95) + ... + (2 -1) = 1 + 1 + 1 ... + 1 = 1(50) = 50"
        ],
        links: null
    },
    {
        id: 37,
        answer: "32",
        solutions: [
            "It is easy to show that for a given area, the rectangle with smallest perimeter is a square. One can use the calculus of a single variable, Lagrange multipliers, quadratic algebra, the AM-GM inequality, and other methods to show that this is true.  For this problem, however, a square cannot be the solution because the sides must be integers and 60 is not a perfect square. 6 by 10 is the closest we can get to a square under this constraint, so the minimum perimeter is 32.  If you do not feel convinced by this argument, feel free to check the perimeters of rectangles with dimensions 5$\\times$12, 4$\\times$15, 3$\\times$20, 2$\\times$30, and 1$\\times$60."
        ],
        links: [
            {
                href: "https://www.youtube.com/watch?v=Nk1JpxwbKhQ",
                text: "The square has minimum perimeter for a given area - calculus"
            },
            {
                href: "https://en.wikipedia.org/wiki/AM-GM_Inequality#Geometric_interpretation",
                text: "AM-GM inequality - Wikipedia"
            }
        ]
    },
    {
        id: 39,
        answer: "CEBADF",
        solutions: [
            "We will refer to our solution as a 'word' consisting of the letters A, B, C, D, E, and F. We are told that Amy sits next to Ben and Ben sits next to Eddie, so we have either ABE or EBA in our word.  We are also told that Amy sits somewhere to Eddie's right, so we must have EBA. We are told Amy sits somewhere to Carls right, which means the C must appear before the EBA block. Similarly, we are told Eddie sits somewhere to Fiona's left, so F must appear after EBA.  Since Carl and Diane do not sit by one another, we must have that Diana also appears after EBA as well.  So we have either CEBADF or CEBAFD.  Finally, we are told that Diana sits somewhere to Fiona's left, so it must be that the order is CEBADF."
        ],
        links: null
    },
    {
        id: 41,
        answer: "7oz of pitcher A and 3oz of pitcher B",
        solutions: [
            "Suppose we start with 10oz of pitcher A.  That will be only 80% water, which is too low of a percentage.  On the other hand, if we replace 5oz of pitcher A with 5oz of pitcher B, it is easy to see that the resulting mixture will be 85% water, which is too watery. Furthermore, if you had instead replaced all 10 oz of pitcher A with 10 oz of pitcher B, your resulting solution would be much too watery; it would be 90% water.  It might seem pointless to go even further past 85%, but we did so to point out a relationship between replacing ounces and increases in the resulting percentage:  If we replace 5oz, the water percentage increases by 5%; if we replace 10oz, the percentage increases by 10%.  This isn't by any means a <em>proof</em> that the relationship between those quantities is linear, it is simply just an effort to make that suspicion seem reasonable.  Under this suspicion, we guess that if we start with 10oz of pitcher A and replace 3oz with pitcher B, then the resulting juice will be 83% water.  It is easy to verify that this is the case: $\\frac{0.8(7)+0.9(3)}{10}$ = 0.83"
        ],
        links: null
    },
    {
        id: 42,
        answer: "109 paperclips",
        solutions: [
            "A pencil is 29 paper clips, so a pencil and 5 paper clips weighs the same as 34 paper clips.  Since two erasers are equivalent to a pencil and 5 paper clips, then two erasers is equivalent to 34 paper clips; each eraser must be 17 paper clips.  Then three erasers and two pencils is equivalent to 17(3) + 29(2) = 109 paper clips."
        ],
        links: null
    },
    {
        id: 43,
        answer: "55%",
        solutions: [
            "Suppose the test has 100 points on it.  If four kids take the test and their collective average was 80%, that means that they collectively earned 320 out of the 400 possible points among them, because 320 is 80% of 400.   If 5 kids take the test and their average is 75%, then that means they earned 375 out of the 500 possible points.  The last student, therefore, earned 375 - 320 = 55 of the 100 possible points on his test; he scored a 55%.",
            "Call the fifth student Dave. If Dave had gotten an 80%, the average would have remained exactly 80%.  However, because the average went down by 5%, that means his score was so far below the average that the result was as if <em>every student in the class lost 5% off their score.</em>  There are 5 students in the class, so we know that the class total is 5$\\times$5% = 25% lower than what it would have been if Dave had gotten an 80%.  Since the other students scores are fixed, we know that the 25% was lost from Dave's score.  Dave therefore, earned 80% - 25% = 55% on his exam."
        ],
        links: null
    },
    {
        id: 44,
        answer: "32,400",
        solutions: [
            "For a given integer $n$ with prime factorization $n = p_{1}^{\\alpha_{1}}p_{2}^{\\alpha_{2}}...p_{k}^{\\alpha_{k}}$, $n$ has exactly $(\\alpha_{1} + 1)(\\alpha_{2} + 1)(...)(\\alpha_{k} + 1)$ factors.  In order for a number to have 75 factors (an odd number of factors), it must be a square.  We also must be a square multiple of 225, because that is the smallest square number containing 75.  225 has 9 factors, and 9 doesn't go into 75, so we need to use either more 3s or more 5s to get to a number of factors that does.  3s are better because we want the smallest number, so we multiply by 9.  Doing so results in a number with 15 factors, which is great.  So now we just need to multiply by some number $p^4$, where $p\\neq$3, p$\\neq$5, which will multiply the number of factors by 5 (and then we will have 75 factors).  The smallest choice of p is 2, so we have 225 $\\times$ 9 $\\times 2^4$ = 32,400.  This solution was probably not super clear, so in the future I will be making a video with lattice diagrams to help explain the formula used because it is a truly beautiful bit of mathematics."
        ],
        links: [
            {
                href: "https://artofproblemsolving.com/wiki/index.php/1990_AIME_Problems/Problem_5",
                text: "AIME - 1990"
            }
        ]
    },
    {
        id: 45,
        answer: "0",
        solutions: [
            "The number will have 2 and 5 as factors, so it will be a multiple of 10."
        ],
        links: null
    },
    {
        id: 46,
        answer: "13 nuts",
        solutions: [
            "If you draw 12 nuts, it is possible (although unlikely) that you draw 4 of each type, so that each pile has only 4 nuts in it. This is the <em>only</em> way for each of the three piles to contain fewer than 5 nuts. In this case, drawing one more nut means that one of the piles will have 5.  Clearly, it is possible that you reach a pile of size 5 much sooner than the 13th draw (if, for example, the first five nuts are all of the same type), but 13 is the smallest number of draws that guarantees at least one of the piles to have 5 nuts (or more)."
        ],
        links: [
            {
                href: "https://en.wikipedia.org/wiki/Pigeonhole_principle",
                text: "Pigeonhole Principle - Wikipedia"
            }
        ]
    },
    {
        id: 47,
        answer: "120 ways",
        solutions: [
            "Begin by giving Spencer three pennies, Nadav two, and Ryan one.  There are now 11 pennies left to distribute, and we must distribute them in such a way that each child gets at least one.  Line up the pennies in a row and take 3 colored pencils (red, blue, and yellow - we will use the colors later) which we will use as dividers.  There are 10 spaces between the 11 pennies for us to place the 3 pencils and we will place them so that each pencil occupies a different space than the others. Any placement of pencils in this way divides the pennies into four groups, so that Spencer gets the first group, Nadav gets the second, Ryan the third, and Jude the fourth.  For example, we could place the pencils into the first three spots and the result would look like: o|o|o|oooooooo, where 'o' represents a penny and '|' represents a pencil.  With this placement, Spencer, Nadav, and Ryan would each get one additional penny, while Jude would recieve 8.  Placements of pencils are in one-to-one correspondence with ways to distribute the remaining 11 pennies in such a way that each child gets at least one, so we need only count pencil placements.  We have 10 choices for the red pencil's placement, then 9 choices for the blue, and finally 8 for the yellow.  However, the colors of the pencils do not affect the division of the pennies.  Indeed, for any of the 10 $\\times$ 9 $\\times$ 8 = 720 placements of the pencils, we could shuffle the 3 pencils into any order of red, blue, and yellow, without producing a different division of pennies.  Since there are 3 $\\times$ 2 $\\times$ 1 = 6 ways that we can shuffle the three colors, then we have over-counted the number of ways we can distribute the pennies by a factor of 6.  There are thus 720 / 6 = 120 different ways that we could distribute the remaining 11 pennies among the 4 boys so that each gets one."
        ],
        links: [
            {
                href: "https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)",
                text: "Stars and Bars - Wikipedia"
            }
        ]
    },
    {
        id: 48,
        answer: "4.8 miles to the top",
        solutions: [
            "We can use the least common multiple of 4 and 6: if it were 12 miles to the top, it would take her 12 mi / 4 mph = 3 hours to go up and 12 mi / 6 mph = 2 hours to go down; the trip would take her 5 hours. If a 12 mile hill takes 5 hours, then a 2.4 mile hill takes 1 hour.  Since the trip took 2 hours, the hill must be 4.8 miles to the top."
        ],
        links: null
    },
    {
        id: 49,
        answer: "20 mph",
        solutions: [
            "The distance to the beach is not given, so let us suppose that it is 60 miles away (the reason we chose 60 miles will soon become apparent). Then, because the average speed for the entire trip is 24 mph, the entire 120 mile journey will have taken 5 hours.  Similarly we know that it took him 2 hours to get there because he drove 30mph for the 60 mile journey there.  This means that the 60 mile return turn trip took him 3 hours; he drove 60 / 3 = 20 mph on the way back.  In this solution, we chose 60 miles because it is the smallest multiple of 30 whose double (120) is a multiple of 24, but it turns out that choosing any other distance would yeild the same result."
        ],
        links: null
    },
    {
        id: 50,
        answer: "35 miles per hour",
        solutions: [
            "Call his speed on the trip there $x$ mph, so that his return speed is $x+9$ mph. His average speed, 40 mph, is <em>not</em> halfway between these two speeds: because Mr. Sampson drives <em>slower</em> on the way there, he spends more time driving at $x$ mph than at $x+9$ mph, so the average $40$ is closer to $x$ mph than to $x+9$.  At this point, our number sense bells are jingling, and we immediately suspect that $x$ is 36 mph (and that his return speed is $45$ mph)  It is easy to check that our suspicion was correct.  Suppose the zoo was 180 miles away.  Then the journey there would take 5 hours at 36 mph, and the return trip would take 4 hours at 45 mph, for a total of 9 hours round trip.  360 miles in 9 hours is an average speed of 40 mph, so we have indeed found the correct solution.  The speed limit is thus 35 mph.",
            "Let us denote by $D$ the distance to the zoo, by $v$ the speed limit, and by $t_1$ and $t_2$ the times take to travel to and from the zoo respectively.  Since average speed is given by total distance over the total time, we have: <br><br> <div style='text-align:center'>$40 = \\frac{2D}{t_1 + t_2}$, $v+1 = \\frac{D}{t_1}$, and $v+10 = \\frac{D}{t_2}$. </div><br> Taking the reciprocal of each equation (and simplifying a factor of 2 in the first equation), we obtain: <br><br> <div style='text-align:center'> $\\frac{1}{20} = \\frac{t_1+t_2}{D}$, $\\frac{1}{v+1} = \\frac{t_1}{D}$ and $\\frac{1}{v+10} = \\frac{t_2}{D}$ </div><br> Note that the first equation is the sum of the other two, so indeed, we have: <br><br><div style='text-align:center'> $\\frac{1}{20} = \\frac{1}{v+1} + \\frac{1}{v+10}$ </div><br> Combining our fractions, we have $\\frac{1}{20} = \\frac{2v+11}{(v+1)(v+10)}$, which simplifies to $(v+1)(v+10) = 40v + 220$.  Rearranging, we obtain <br><br><div style='text-align:center'> $v^2 - 29v - 210 = 0$, </div><br> which factors as $(v - 35)(v + 6) = 0$; choosing the positive root, we find that the speed limit is 35 mph."
        ],
        links: null
    },
    {
        id: 51,
        answer: "7 hours",
        solutions: [
            "We assume that Morten could paddle at some constant speed greater than 3 mph in a still lake; otherwise, Morten would not be able to paddle his way back to camp against the current. Call this speed $v$ mph. He first goes upstream $v$ - 3 miles and then down stream 2($v$ + 3) miles for total distance of 2($v$ + 3) - ($v$ - 3) = $v$ + 9 miles downstream.  Since $v$ + 9 = 14, then he must be able to paddle at a constant rate of $v$ = 5 mph.  However, paddling against the current, his net speed will be 2 mph, so it will take 7 hours for him to travel the 14 miles back to camp."
        ],
        links: null
    },
    {
        id: 52,
        answer: "15 mph",
        solutions: [
            "Average speed is total distance divided by the total time.  So if we want the average speed over the full 40 miles to be 10 miles per hour, then the whole ride must take 4 hours.  Up until this point, the cyclist has ridden for 30 miles / 9 mph = 3.3333... hours, or 3 hours and 20 minutes.  So she must cover the next 10 miles in 40 minutes, which means she pedals at a rate of 1 mile every 4 minutes, or 15 mph."
        ],
        links: null
    },
    {
        id: 53,
        answer: "The girl travels faster (3 mph) than the boy (roughly 2.667 mph)",
        solutions: [
            "The boy travels a total distance of 2 miles in 45 minutes (30 minutes for the first mile and 15 minutes for the second), is an average speed of roughly 2.667 mph.  On the other hand, the girl travels a total of 6 miles in 2 hours, so she walks at an average speed of exactly 3 mph.  The interesting thing to note here is that with speeds you can take a shortcut and simply find the arithmetic mean $\\left(\\frac{v_1 + v_2}{2}\\right)$ when the two speeds are traveled for equal amounts of <em>time</em> only, not distance.  More generally, if $n$ different speeds $v_1, v_2, ..., v_n$ are traveled for $n$ different amounts of times $t_1, t_2, ..., t_n$, then the average speed will simply be the weighted average $\\frac{v_1t_1 + v_2t_2 + ... + v_nt_n}{t_1 + t_2 + ... + t_n}$ - it should be easy to see that this is simply the definition of average speed (total distance over the total time).  We also saw that when equal amounts of distance are traveled, the average speed will always be closer to the <em>slower</em> of the two speeds because the person will have spent more <em>time</em> traveling at the slower speed (since the distances are equal).  When equal distances are traveled, the average speed will be the <em>harmonic mean</em> of the two speeds: $\\left( \\frac{v_1^{-1} + v_2^{-1}}{2} \\right)^{-1}$"
        ],
        links: [
            {
                href: "https://en.wikipedia.org/wiki/Harmonic_mean",
                text: "Harmonic Mean - Wikipedia"
            }
        ]
    },
    {
        id: 54,
        answer: "1 hour and 5 minutes",
        solutions: [
            "In 6 hours, they collectively mow 11 lawns: Jina mows 2, Josh mows 3, and Gregg mows 6.  So 1 lawn would take 0.5454.. hours, and thus two lawns would take 1.0909.. hours, or roughly 1 hour and 5 minutes.",
        ],
        links: null
    },

]