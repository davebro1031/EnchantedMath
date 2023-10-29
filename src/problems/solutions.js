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
        solutions:[
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
                href:"https://www.youtube.com/watch?v=LUVKuyfpe2I&t=49s",
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
                text:"100 Lockers - Youtube",
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
    }

]