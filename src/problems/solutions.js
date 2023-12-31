import s62_4_seconds from '../images/s62_4_seconds.png'

export const solutions = [
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
        id: 27,
        answer: "112 cups of tropical punch",
        solutions: [
            "The recipe calls for 3 cups of coconut milk, and because you have 30 cups, that means you have enough coconut milk for 10 batches.  However, in the same way, you only have enough orange juice for 8 batches.  Orange juice is the limiting ingredient (check the pineapple juice on your own), so we can only match a maximum of 8 batches if we follow the recipe.  Each batch makes 6 + 5 + 3 = 14 cups of punch, so we can make a total 112 cups of tropical punch.  There will be 6 cups of coconut milk and 22 cups of pineapple juice left over.",
        ],
        links: null
    },
    {
        id: 28,
        answer: "$91",
        solutions: [
            "We begin by making piles of coins. In each pile we place 25 coins: 4 nickles, 6 dimes, and 15 quarters.  The ratios given ensure that we will run out of each type of coin at the same time. For example, if there are 3 dimes for every 2 nickels, then we will have 6 dimes for every 4 nickels, so we will run out of nickels at the same time we run out of dimes.  Since there are 500 coins in total and each pile has 25 coins, there must be 20 piles.  Each pile is worth $4.55, so the altogether the piggy bank has 91 dollars in it."
        ],
        links: null
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
            "We assume that Morten could paddle at some constant speed greater than 3 mph in a still lake; otherwise, Morten would not be able to paddle his way back to camp against the current. Call this speed $v$ mph; $v$ > 3.  If there were no current in the river, he would be exactly $v$ miles downstream from where he started, because one of the hours he paddled downstream would cancel out with the one hour he paddled upstream.  On the other hand, if he hadn't paddled at all, he would be exactly 9 miles downstream because the current is 3 mph and it would have carried him downstream for 3 hours.  Putting these two effects together, we see that he winds up $v$ + 9 miles downstream, and hence $v$ must be 5.  So because he can paddle 5 mph, but the current is against him, his net speed will be 2 mph on his way back to camp; 14 miles at 2 mph takes 7 hours.",
            "(Algebra) We assume that Morten could paddle at some constant speed greater than 3 mph in a still lake; otherwise, Morten would not be able to paddle his way back to camp against the current. Call this speed $v$ mph; $v$ > 3. He first goes upstream $v$ - 3 miles and then down stream 2($v$ + 3) miles for total distance of 2($v$ + 3) - ($v$ - 3) = $v$ + 9 miles downstream.  Since $v$ + 9 = 14, then he must be able to paddle at a constant rate of $v$ = 5 mph.  However, paddling against the current, his net speed will be 2 mph, so it will take 7 hours for him to travel the 14 miles back to camp."
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
        id: 55,
        answer: "4 hours",
        solutions: [
            "In 24 hours, the first faucet would fill 4 containers, the second would fill 3 containers, and the last would fill 2.  The leakage would empty one container's worth, so in 24 hours, the faucets and leakage together would fill 2 + 3 + 4 - 1 = 6 containers.  So they will fill a container every 4 hours.",
            "In 1 hour, the first faucet fills 1/6 of a container, the second 1/8, the third 1/12, and the leakage drains 1/24.  So in one hour, altogether 1/6 + 1/8 + 1/12 - 1/24 = 1/4 of a container is filled.  So the container fills in 4 hours."
        ],
        links: null
    },
    {
        id: 56,
        answer: "59 flowers",
        solutions: [
            `
            For this solution, we refer to numbers as "purchaseable" and "unpurchaseable".  Note that 6 and 13 are relatively prime, which is essential to this problem.  It is easy to see that if they were both multiples of 3, for example, then you would only be able to purchase flowers in multiples of 3, and so there wouldn't be a <em>greatest</em> unpurchaseable amount.  <br>
            <br> We approach this problem by first noting that every number has some remainder when divided by 6.  Multiples of 6 have remainder 0, and every other positive integer can be sorted into one of five other groups: those have remainder 1, 2, 3, 4, and 5.  We refer to these groups as "residue classes" and use the terminology of modular arithmetic.  For example, we say that "19 is 1 mod 6" because it belongs to the class of integers that have remainder 1 when divided by 6.  As another couple of examples, it is easy to verify that "8 is 0 mod 2" and that "68 is 2 mod 11."  As a final example, we note that the residue class of "4 mod 6" consists of the following positive integers: 4, 10, 16, 22, 28, ...  <br>
            <br> One important property of these residue classes is that if we take any two numbers that belong to the same residue class mod 6, then their difference will be a multiple of 6.  For example, lets take two numbers that are both 4 mod 6: 64 and 16.  Their difference, 48, is clearly a multiple of 6. Thinking about remainders, it should be easy to see why this will always happen for any two members of the same residue class. <br>
            <br> This means that as soon as we find one purchaseable number that is $n$ mod 6, then every greater number that is $n$ mod 6 will also be purchaseable.  For example, because we can purchase 26 (two large bouquets), then it is easy to purchase any other greater number that is also 2 mod 6.  We simply purchase 26 and then continue purchasing small bouquets until we reach the desired amount.  To illustrate this, suppose we want to buy 44 flowers.  44, like 26, is 2 mod 6.  So we first purchase 26 flowers: there are now 18 flowers remaining to be purchased.  We can purchase 18 flowers via 3 small bouquets, so 44 is purchaseable.<br>
            <br> Now, note that without the large bouquets, the only class of integers that would be purchaseable would be those that are 0 mod 6; the multiples of 6.  So the large bouquets are necessary to purchase numbers in any of the other five residue classes. Now consider the numbers of the form $k \\times 13$, for $k = 1, 2, 3, 4,$ and $5$: each of these numbers must belong to a different residue class mod 6. Indeed, if we assume that $k_1 \\times 13$  and $k_2 \\times 13$ belong to the same class, then their difference must be a multiple of 6: $(k_1 - k_2) \\times 13 = 6 \\times m$ for some integer $m$.  Since both of $k_1$and $k_2$ as less than 6, and since 6 and 13 are relatively prime, then this equation can only be satisfied by $k_1 = k_2$ and $m = 0.$  Thus each of the five integers $k \\times 13$ for $k = 1, 2, 3, 4,$ and $5$ are a distinct set of representatives for each of the five remaining residue classes. <br>
            <br> Not only are these numbers representatives of each of the residue classes of 1, 2, 3, 4, and 5 mod 6, they are also the smallest purchaseable members of these classes.  For example, suppose we have some other purchaseable member of the same residue class $4 \\times 13$.  Call this number $p$ and write it in the form $6m + 13n$ for some $m, n \\geq 0$.  Note that the stricter condition $n \\geq 4$ must hold, because if n = 0, 1, 2, or 3, we then our number would belong to a different residue class.  This is enough to show that $p \\geq 13 \\times 4$ and hence $13 \\times 4 $ is the smallest purchaseable member of its residue class mod 6.  A similar argument applies to each of the other numbers $k \\times 13$ for  $k = 1, 2, 3,$ and $5$. <br>
            <br> From the preceding arguments, we conclude that every single number after $13 \\times 5$ is purchaseable.  Indeed, it is easy to see that with just the small bouquets alone, we can purchase every number of the form 0 mod 6.  In paragraph 4, we showed that once you can purchase <em>one</em> member of a given residue class, then every member after that will be purchaseable.  In paragraph 5, we showed that after $13 \\times 5$, then we will have found a purchaseable member of each residue class, and so every number after $13\\times 5$ will be purchaseable.  <br>
            <br> Furthermore, each of the five integers of the form $(13 \\times 5) - j$ for $ j = 1, 2, 3, 4,$ and $5$ will also be purchaseable.  To see why, first note that $13 \\times 5$ and each of the 5 preceding numbers belong to distinct residue classes.  Imagine we are counting along the number line and marking X's on every purchaseable number as we go.  As we count along, paragraph 4 showed that each time we reach some multiple of 13, another previously unpurchaseable residue class mod 6 becomes purchaseable.  So by the time we pass $13 \\times 4$, every residue class except the one containing $13 \\times 5$ is purchaseable.  Since each of the five integers of the form $(13\\times 5) - j$ are greater than $13 \\times 4$ and none of them belong to the same residue class as $13 \\times 5$, each of those will be purchaseable. <br>
            <br> Finally, we conclude that $(13 \\times 5) - 6$ is the greatest unpurchaseable number.  We have already shown that every number greater than this <em>is</em> purchaseable.  All that remains to be shown is that it cannot be purchased.  This is easy.  Note that it is of the same residue class as $13 \\times 5$, and paragraph 6 established that $13 \\times 5$ must be the smallest purchaseable member of its class.  So $13\\times 5 - 6$ is unpurchaseable.<br>
            <br> 59 is the greatest unpurchaseable number of flowers. <br>
            <br> You may have found some of my arguments needlessly general (for example, I repeatedly referred to "$13\\times 5$" instead of just calling it "$65$")  The reason for this is that I wanted to make this argument easily generalizeable.  Our solution showed how to reason that $59$ is the solution for the pair $(6, 13)$, but by following the arguments laid out here, we can show that the solution for any relatively prime pair $(m, n)$ is $m(n-1) - n$.  That formula works, but its beautiful symmetry is obscured in that form.  We present several more expressions that more clearly elucidate the symmetry between $n$ and $m$: <br>
            <br> $mn - m - n$ <br> $mn - (m + n)$ <br> $(m-1)(n-1) - 1$ 
            `
        ],
        links: [
            {
                href: 'https://en.wikipedia.org/wiki/Coin_problem',
                text: 'Coin problem - Wikipedia'
            },
            {
                href: 'https://www.youtube.com/watch?v=FJtaaM7Txys',
                text: 'The Nugget Algorithm - VSauce'
            }
        ]
    },
    {
        id: 57,
        answer: "see below",
        solutions: [
            `
            Begin by taking four balls: both gray and then one green and one purple.  On each side of the balance we place one gray and one colored ball.  <br>
            <br> If the scales balance, then we know that one of the colored balls is heavy and one is light; the heavy colored ball must be with the light gray ball and vice versa.  So we simply remove the colored balls from the scale and reweigh just the gray balls; this will tell us which gray ball is heavy.  Since we know which gray ball is heavy, then we know which of the colored balls we removed was heavy (it was paired with the light gray ball).  Suppose it was the purple ball that was heavy. Then we also know that the green ball we weighed is light, which means its counterpart is heavy; we have determined all three heavy balls.<br>
            <br> If the scales <em>do not</em> balance, this can occur in one of three ways: 1) the light gray is paired with a light colored ball and the heavy gray is paired with a light colored ball; 2) the light gray is paired with a light colored ball and the heavy gray is paired with a heavy colored ball; 3) the light gray ball is paired with a heavy colored ball and the heavy gray ball is also paired with a heavy colored ball.  In all three cases, note that the heavy side of the scale contains the heavy gray ball and vice versa.  So the gray balls are known.  Now swap one gray ball with one colored ball and reweigh the same four balls: this time with the two gray balls together and the two colored balls together.  If the gray balls together are heavier than the two colored balls together, then we know the two colored balls were both light (case 1) and hence all three balls are known.  If the gray balls are lighter than the colored balls, then the colored balls must be both heavy (case 3) and again, we are finished.  Finally, if the scales balance then we know one of the colored balls is heavy and the other is light.  This can only happen if the light colored ball was with the light gray and the heavy colored ball was with the heavy gray ball (case 2).  If the reverse had been true, then the scales would hae balanced originally.  So suppose the purple was originally with the light gray ball and the green was with the heavy gray ball.  Then we know that the green we weighed was heavy and the purple we did not weigh is heavy.  In any event, we have determined all three heavy balls.
            `
        ],
        links: null
    },
    {
        id: 58,
        answer: "3, 3, and 8 years old",
        solutions: [
            "Please see the wikipedia article below for an extremely clear and detailed explanation of the solution"
        ],
        links: [
            {
                href: "https://en.wikipedia.org/wiki/Ages_of_Three_Children_puzzle",
                text: "Ages of Three Children puzzle - Wikipedia"
            }
        ]
    },
    {
        id: 59,
        answer: "76 officers holding hands",
        solutions: [
            "If there were 6 officers, for example, it is easy to check that #1 and #4 would stand opposite to one another, as would #2 and #5, as well as #3 and #6.  The invariant here is that the absolute difference in opposite officer's numbers is 3 (4 - 1 = 5 - 2 = 6 - 3).  This is because 3 is half of 6; the officers stand exactly halfway around the circle form one another.  Now note that 55 - 17 = 38; the two officers standing exactly opposite one another have a difference of 38.  These officers stand a distance of exactly halfway around the circle from one another, so 38 must be half of the total number of officers.  There must be 76 officers."
        ],
        links: null
    },
    {
        id: 60,
        answer: "987 ways to climb the stairs",
        solutions: [
            `
            We first note that the stair sequence (2, 4, 6, 8, 10, 12, 13, 15) can be represented differently via the step size at each move: (2, 2, 2, 2, 2, 2, 1, 2). The original sequence is recoverable as the partial sums of our new sequence.  Similarly, the stair sequence of (1, 3, 5, 6, 7, 9, 10, 12, 14, 15) could be represented as steps of sizes (1, 2, 2, 1, 1, 2, 1, 2, 2, 1).  In both cases, the essential invariant here is that both sequences of ones and twos add up to 15 for obvious reasons. So our aim is to count the number of distinct sequences of 1s and 2s, where order does matter, such that the sum of the sequence is exactly 15. <br> 
            <br> We begin by reducing the problem down to smaller cases.  Suppose the flight had just one stair, not 15. Clearly there is just one way he could climb this "flight:" he would take a single step, corresponding to the sequence (1).  Suppose now that the flight had two stairs: there are two ways he could climb them: (1,1) and (2).  <br>
            <br> If the flight had three steps, Nico has two choices for his first step: he could either take a step onto the first stair, or he could skip the first stair and step directly onto to the second; his sequence could stair either with a 1 or a 2.  If he starts with a 1, there are two stairs remaining to climb - we have seen that there are two ways for him to do so: (1,1,1) and (1,2).  On the other hand, if he begins by skipping the first stair, then there is only one stair remaining to climb, and we have seen that there is just one way to climb it: (2, 1).  So when there are three stairs, there are exactly 3 ways to climb the flight. <br>
            <br> You may suspect that if there are $n$ stairs in the flight, there will be $n$ different ways to climb it.  We will see that this is not the case for $n = 4$.  In this case, Nico again has the choice of beginning his sequence of steps with a 1 or a 2.  If he begins with a 1, then there are 3 stairs remaining, so there are three ways he can complete his climb: (1, 1, 1, 1), (1, 1, 2), (1, 2, 1).  On the other hand, if he begins with a 2, then 2 stairs remain and hence there are two ways he can finish his climb: (2, 1, 1) and (2, 2).  So when there are four stairs, we have 5 distinct ways to climb the flight. <br>
            <br> Now suppose there are 5 stairs.  If he begins with a 1, then four steps remain: there are 5 ways he can complete this climb.  If he begins with a 2, then three steps remain: there are 3 ways he can complete this climb.  So there are 3 + 5 = 8 different ways he can climb a flight of 5 stairs. <br>
            <br> Suppose there are 6 stairs.  If he begins with 1, then since there are 5 remaining stairs to climb, there will be 8 ways to finish the climb. If he begins with 2, then 4 stairs remain to climb and so he can finish the climb in 5 ways.  There are 13 distinct ways to climb 6 stairs. <br>
            <br> At this stage, we recognize both the specific numbers and structure of the Fibonacci sequence.  Indeed, if we consider the seqeunce we have been constructing, to find the 6th term (13), we simply summed the value of the previous two (5 + 8).  This pattern will continue as the number of stairs increases: if there are 7 stairs, there will be 21 ways to climb them.  If there are 8 stairs, there will be 34 ways.  Following the recurrence of summing the previous two to get the next, it is easy to calculate that when there are 15 stairs, there will be 987 ways to climb them.
            `
        ],
        links: null
    },
    {
        id: 61,
        answer: "EDACB",
        solutions: [
            `
            We first consider the second prediction: $DAECB$.  Since there are two disjoint pairs in the correct order, then exactly four of the students must belong to one of these pairs. So there is exactly <em>one</em> student who is not a member of one of these pairs - we shall call her the 'excluded' student. There are <em>two</em> correctly placed students, which means that <em>at least</em> one of the correctly placed students must be among the four who belong to a disjoint pair (they cannot <em>both</em> be the excluded student). However, if one member of a correctly ordered pair is also in the correct place, then his or her counterpart must also be correctly placed.  So there is a correctly placed <em>pair</em> of students and the remaining three are all incorrectly placed. <br>
            <br> So the candidates for the correctly placed pairs are $DA$, $AE$, $EC$, and $CB$.  At a moment's glance we can see that the middle two ($AE$ and $EC$) are not possible.  Assume for the sake of contradiction that $AE$ is correctly placed.  Then the solution will be of the form _ $AE$ _ _ , where the blanks are filled with $D, C,$ and $B$ in an order such that none are in the same places as they are in the above prediction. However, there must be a second correctly ordered consecutive pair in the above prediction.  The only possible candidate is $CB$, but the only way those two could be placed consecutively is if they are in the places they already occupy.  But then <em>every</em> student would have to be in the correct location, which is not possible.  For a similar reason, $EC$ cannot be the correctly placed pair: there is simply no room for a second incorrectly-placed yet correctly-ordered consecutive pair.  <br>
            <br> Let us examine the possibilities if the correctly placed pair is $DA$.  Then the other correctly-ordered yet incorrectly-placed consecutive pair could either be $EC$ or $CB$.  If it is $EC$, then the correct order must be $DABEC$.  On the other hand, if it is $CB$, then the only possiblity is $DACBE$.  Neither of these can be the correct order.  To see why, note that $DABEC$ has $AB$ placed consecutively, which is ruled out by the first prediction (we are told that the prediction $ABCDE$ has no two correctly ordered consecutive pairs).  Similarly, $DACBE$ is ruled out by the first prediction because $C$ cannot be in the third position (none of $ABCDE$ are correctly placed). <br>
            <br> So $CB$ must be the correctly placed pair. Then the possibilities for the other correctly-ordered yet incorrectly-placed consecutive pair are $DA$ (corresponding to $EDACB$) and $AE$ (corresponding to $AEDCB$).  It is easy to see that $AEDCB$ cannot be the correct order, because the first prediction tells us that $A$ cannot be in the first position.  It is equally easy to verify that the ordering $EDACB$ satisfies all of the conditions given to us, and the preceding arguments show that it is the <em>only</em> such ordering.
            `
        ],
        links: [
            {
                href: "https://artofproblemsolving.com/wiki/index.php/1963_IMO_Problems/Problem_6",
                text: "1963 IMO Problem 6"
            }
        ]
    },
    {
        id: 62,
        answer: "14641 different locations",
        solutions: [
            `
            Suppose we find the ladybug after two minutes at some point $(x, y)$. We begin with the claim that we must have that $|x| + |y| \\leq 120$.  To explain why this must be true, first note that a <em>shortest</em> path to the point $(x, y)$ involves taking $|x|$ steps in either the positive or negative x-direction so that the ladybug ends up directly above or below the point $(x, y)$, then taking exactly $|y|$ steps in the y-direction to reach its destination.  We said that this is "a" shortest path, and not "the" shortest path, because there are many such paths of this same length.  Indeed, as long as the ladybug progresses in a way such that its pythagorean distance to the point $(x, y)$ is strictly decreasing, then it will make a total of $|x|$ steps in the appropriate horizontal direction and $|y|$ steps in the appropriate vertical direction.  We say that the minimum walking distance to the point $(x, y)$ is $|x| + |y|$ because it takes <em>at least</em> that many steps for the ladybug to reach that point.  The ladybug takes only 120 steps, so it certainly cannot reach any point whose minimum walking distance is greater than 120.  Thus if the ladybug ends up at point $(x, y)$, we cannot have $|x| + |y| > 120$; we must have $|x| + |y| \\leq 120$.<br>
            <br> So we have bounded the region in which we can find the ladybug.  The region satisfying $|x| + |y| \\leq 120$  is the square, centered at the origin, whose vertices are at $(120,0), (0, 120), (-120, 0),$ and $(0, -120)$.  Other notable points include $(60, 60)$ or $(60, -60)$, for example, which correspond to taking 60 steps in the +x direction and then 60 more in either the positive or negative y-directions.  It is clear that the ladybug could also end up somewhere within the interior of this region as well, not just on its boundary.  For example, the ladybug could wind up at the origin if it just stumbles back and forth alternating between the $+x$ and $-x$ directions for the full two minutes.  You may suspect that it could end up at <em>any</em> of the interior points within this square, but we argue now that the ladybug can be found at only <em>roughly half</em> them at the end of the two minutes. <br>
            <br> We show that the coordinates $x$ and $y$ must be either both even or both odd.  Let $U$ (for up) be a nonnegative integer that represents the number of moves in the $+y$ direction, $D$ (for down) the number of moves in the $-y$ direction, $L$ (left) the number in the $-x$ direction, and $R$ (right) the number in the $+x$ direction. Then we have $U + D + L + R = 120$ because the ladybug takes one step each second and each step is in exactly one of these four direction.  Now, since we have $x = R - L$ and $y = U - D$, then we have: <br>
            <br> $x + y = R - L + U - D$ <br>
            <br> $x + y = R + L + U + D - 2(L + D)$ <br>
            <br> $x + y = 120 - 2(L + D)$ <br>
            <br> And so $(x+y)$ must be an even number, since it is a multiple of two less than 120. An essential way to characterize this fact is that $x$ and $y$ must have the same <em>parity</em>: if one is odd then so is the other, and vice versa.  <br>
            <br> Furthermore, we can show that the ladybug could be found at <em>any</em> interior point whose coordinates have the same parity.  Consider some arbitrary point $(x_0, y_0)$ within the square region $(|x_0| + |y_0| \\leq 120)$ such that $x_0$ and $y_0$ have the same parity.  The ladybug could end up at this point after two minutes by 1) taking a shortest path of length $|x_0| + |y_0|$ to the point, then 2) alternating steps in the $+x$ and $-x$ directions if there is any time remaining at this point.  This works because both $x_0$ and $y_0$ have the same parity, then so do $|x_0|$ and $|y_0|$, and so their sum is even.  This means that it takes an even number of seconds to reach $(x_0, y_0)$ initially, hence if there is any time remaining, it will be $120 - (|x_0| + |y_0|)$ seconds - an even number of seconds.  Alternating until the time runs out will thus end with the ladybug landing back on $(x_0, y_0).$ <br>
            <br> So our aim is to count the number of points $(x, y)$ such that $|x| + |y| \\leq 120$ and such that $x$ and $y$ have the same parity.  To do so is actually extremely simple - we have finished with the difficult portion of this solution.  In order to better visualize the set of points that we are trying to count, we briefly reduce the problem down from 120 seconds to just 4 seconds.  Take a moment to verify that in the image below, we have plotted precisely the points $(x, y)$ in the coordinate plane such that $|x| + |y| \\leq 4$ and such that $x$ and $y$ have the same parity. <br>
            <br><img src=${s62_4_seconds} style="width:350px"></img><br>
            <br>There are $5^2 = 25$ possible ending points if we allow the ladybug to wander for 4 seconds.  It is also easy to see from the image above that if the ladybug wandered for just two seconds, there would be $3^2 = 9$ possible ending points.  Since our ladybug wanders for 120 seconds, there are $121^2 = 14641$ possible ending points.
            `,
            "It is true, more generally, that if the ladybug walks for exactly $n$ seconds, then the number of possible ending locations will be $(n+1)^2$.  I can think of several ways to prove this fact both inductively and directly but all of them are just ugly.  They rely heavily on tedious algebraic manipulation or other calculations; all of them require handling lots of cases.  For example, one inductive approach involves using the principle of overcounting, but this requires careful handling of interior points, boundary-edge points, and vertices.  Another inductive approach involves separating the problem into two cases: show that it holds for all even $n$ inductively, then do the same for all odd $n$.  This approach not only inelegantly requires splitting into evens and odds, but it also relies on opaque algebraic manipulations of sums to complete the proof. I think the most general and clean way I have found to prove this statement is a direct approach following along the lines of the solution above: Show that if the ladybug walks for $n$ seconds and ends at $(x, y)$, then $|x| + |y|$ must be less than or equal to and of the same parity as $n$.  To conclude the proof using this approach also requires some tedious calculations, but the first two facts seem most intuitive.  I'm writing this as a request:  Can anyone write an intuitive and elegant inductive (or direct, I suppose) proof of this statement for all $n$?"
        ]
    },
    {
        id: 63,
        answer: "45 vertices",
        solutions: [
            `
            Any convex polyhedron has an Euler characteristic of 2.  That is, for convex polyhedra, we always have $F - E + V = 2$, where $F$ is the number of faces, $E$ the number of edges, and $V$ the number of vertices. This is absolutely beautiful fact can be proved in a wide variety of ways, and I encourage you to peruse the proof that I have included in the links below.  The Euler characteristic gives us a way to calculate the number of vertices if the numbers of faces and edges are known - we thus turn our attention briefly towards calculating the number of edges. <br>
            <br> As you will soon see, we can easily count the number of edges by using the principle of overcounting.  If each face were cut out and laid separate from all the others, we would have 3 edges for each triangle, 4 for each square, 5 for each pentagon, and 10 for each decagon; there would be $5(3) + 15(4) + 9(5) + 3(10) = 150$ edges. However, on a polyhedron, every edge is <em>shared</em> by exactly two faces.  Thus the 150 figure represents an overcounting by a factor of 2; this Johnson solid must have 75 edges. <br>
            <br> From here, the remainder of the problem is trivial.  Since we must have $F - E + V = 2$, and we know that $F = 32$ and $E = 75$, then we can easily calculate $V = 45$.
            `
        ],
        links: [
            {
                href: "https://en.wikipedia.org/wiki/Euler_characteristic#Proof_of_Euler's_formula",
                text: "Proof of Euler characteristic for convex polyhedra - Wikipedia"
            },
            {
                href: "https://en.wikipedia.org/wiki/Tridiminished_rhombicosidodecahedron",
                text: "Tridiminished rhombicosidodecahedron - Wikipedia"
            }
        ]
    }

]