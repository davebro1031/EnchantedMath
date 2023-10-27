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
                href:"https://www.youtube.com/watch?v=fw1kRz83Fj0",
                text: "Mathologer - Youtube"
            },
            {
                href:"https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=D3F0A406F79BC3EBAA6A3EB64CED7D68?doi=10.1.1.209.85&rep=rep1&type=pdf",
                text: "Gauss's Day of Reckoning - Bryan Hayes"
            },
        ]
    }
]