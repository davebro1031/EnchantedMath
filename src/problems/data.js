export const problems = [
    {
        id: 2,
        title: "Sawing logs",
        text: "If it takes 6 minutes to saw a log into 3 pieces, how many minutes will it take to saw a similar log into 12 pieces?",
        hints: [
            "How many cuts do you need to make in the log to get it into 12 pieces?"
        ],
        wrongAnswers: [
            "24 minutes"
        ],
        categories: [
            "proportional reasoning",
            "modeling"
        ],
        chilis: 1
    },
    {
        id: 3,
        title: "Lawn mowers",
        text: "It takes Dave 1 hour to mow the lawn; it takes Edith 30 minutes.  If Edith and Dave work together to mow the same lawn, how long will it take them?",
        hints: [
            "How many lawns could they mow if they worked together for an hour?"
        ],
        wrongAnswers: [
            "22.5 minutes",
            "45 minutes",
        ],
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates",
            "harmonic mean"
        ],
        chilis: 1
    },
    {
        id: 4,
        title: "Many marbles",
        text: "There are 500 marbles in a bag; all of them are either red or blue.  If there are 6 more red marbles than blue marbles, how many RED marbles are in the bag?",
        hints: [
            "What if there were the same number of red and blue?"
        ],
        wrongAnswers: [
            "256 red marbles",
            "247 red marbles",
        ],
        categories: [
            "many variables"
        ],
        chilis: 1
    },
    {
        id: 5,
        title: "Primary marbles",
        text: "There are 330 marbles in a bag; all of them have a single, solid color: red, blue, or yellow.  If there are three times as many red marbles as blue marbles, and twice as many yellow marbles as red marbles, how many RED marbles are in the bag?",
        hints: [
            "Separate the colors into sacks of equal sizes.  There is 1 blue sack. How many red sacks?",
            "How many yellow sacks?",
            "How many in each sack?"
        ],
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "many variables"
        ],
        chilis: 1
    },
    {
        id: 6,
        title: "Fence painting",
        text: "If it takes 10 workers 16 hours to paint a fence, how long will it take 15 workers to paint an identical fence?",
        hints: [
            "How long would it take 1 worker?"
        ],
        wrongAnswers: [
            "12 hours"
        ],
        categories: [
            "proportional reasoning",
            "inverse proportion",
        ],
        chilis: 1
    },
    {
        id: 7,
        title: "Auditorium seats",
        text: "The first row of an auditorium has 1 seat. The second row has 2, the third row has 3, and so on.  If the auditorium has 100 rows, how many seats does it have?",
        hints: [
            "Try adding the rows in pairs"
        ],
        wrongAnswers: null,
        categories: [
            "series",
            "quadratics"
        ],
        chilis: 1
    },
    {
        id: 11,
        title: "Carroll's cats",
        text: "6 cats eat 6 rats in 6 minutes.  How many cats are needed to eat 100 rats in 50 minutes?",
        hints: [
            "How many rats will 6 cats eat in 1 minute?"
        ],
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates"
        ],
        chilis: 2
    },
    {
        id: 12,
        title: "The tabby and the turtle",
        text: "A tabby and a turtle take turns on a table.  When the tabby is on the table and the turtle on the floor below, the top of the tabby is 170cm above the top of the turtle. When they trade places, the distance shrinks to 130cm.  How tall is the table?",
        hints: [
            "Imagine they're both cats, but a 'turtle' is a cat lying down.",
            "Try stacking tables."
        ],
        wrongAnswers: null,
        categories: [
            "many variables",
        ],
        chilis: 1
    },
    {
        id: 13,
        title: "How much water?",
        text: "When a partially filled 21cm tall water bottle is placed on a table, water fills it up to a height of 12cm. When the bottle is turned upside down, because the neck is tapered, water fills the bottle up to a height of 15cm.  What fraction of the bottle is filled?",
        hints: [
            "try to imagine that the bottle had a consistent cross section.  How much water would be in it? How much air?"
        ],
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 14,
        title: 'Traveling postman',
        text: "A postman needs to deliver mail to all the houses in his neighborhood.  There are houses on each of the streets in his neighborhood, so the postman must travel each street at least once. He wants to walk the shortest path possible through his neighborhood, to expend the least amount of time and energy possible. At which intersections should he start and finish his walk?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "graph theory"
        ],
        chilis: 1
    },
    {
        id: 15,
        title: "Bridges of Königsberg",
        text: "In a certain town, there is a river that splits and rejoins and splits again, forming an island in the center of town.  There are 7 bridges in this town, and the townsfolk hold a competition to see who can find a bicycle path through the town that crosses each bridge exactly once. Try to find a winning path.",
        hints: null,
        wrongAnswers: null,
        categories: [
            "graph theory"
        ],
        chilis: 3

    },
    {
        id: 16,
        title: "Repeating digits",
        text: "What is the 322nd digit in the expansion of the repeating decimal 0.135713571357…?",
        hints: [
            "What is the 4th, 8th, 12th, etc. digit?"
        ],
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 0
    },
    {
        id: 18,
        title: "Walking the blocks",
        text: "You live in a city where avenues run East-West and are labeled with letters, while streets run North-South and are labeled with numbers.  Your house is at point X, at the intersection of A avenue and 1st street.  The grocery store is at the intersection of D avenue and 8th street.  You want to walk from your house to the grocery store along the shortest path possible, but you cannot cut through city blocks because there are buildings in the way.  The best paths, then, are ones where you walk along the city grid in the East and South directions until you reach the grocery store.  You could walk 7 blocks East along A avenue then 3 blocks south on 8th street, or you could walk 3 blocks south on 1st street, then 7 blocks East along D avenue, or you could take some path alternating between South and East as you go. No matter what 'shortest path' you take, however, you will always wind up walking exactly 10 blocks. If you take a random shortest path to the grocery store, what is the probability that you pass by Jimmy's house on B avenue and 5th street?",
        hints: [
            "Try using the letters 'S' for 'South' and 'E' for 'East' to represent paths with 'words' using those letters."
        ],
        categories: [
            "combinatorics"
        ],
        chilis: 2
    },
    {
        id: 19,
        title: "More than one way...",
        text: "How many ways can a travelling merchant go from Naples to Rome if they are not allowed to take any road more than once, but they ARE allowed to cross over a road they have taken before?",
        hints: [
            "Label the middle three roads with A, B, and C. Routes can be written as 'words' - how many valid words are there?"
        ],
        wrongAnswers: null,
        categories: [
            "graph theory",
            "combinatorics"
        ],
        chilis: 1
    },
    {
        id: 20,
        title: "Mixed drinks",
        text: "A solution is 5% alcohol and 95% water.  A second solution is 20% alcohol and 80% water.  If 2 gallons of the first solution is mixed with 1 gallon of the second solution, what percentage of the resulting solution is alcohol?",
        hints: [
            "Imagine it is 200 gallons and 100 gallons instead"
        ],
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "percentages"
        ],
        chilis: 1
    },
    {
        id: 21,
        title: "Toggling lockers",
        text: "There are 100 lockers in a hallway, numbered 1 to 100.  A teacher sends her first student down the hallway, and asks them to open every locker.  She sends the second student down the hallway, instructing them to close every second locker.  (so after the second student is finished, all of the even lockers are closed and the odd ones are still open).  The third student is instructed to change every third locker.  So she closes locker number 3, because it was open, but she opens locker number 6, because it was closed.  This process continues until the 100th student has walked the hallway (the 4th student changes every 4th locker, the 25th student changes lockers #25, #50, #75, and #100, and the 100th student changes only locker #100). After every student has walked through the hallway, which lockers, if any, are open?",
        hints: [
            "Obviously locker #1 remains open.  Find the next locker that eventually remains open."
        ],
        wrongAnswers: null,
        categories: [
            "number theory",
            "prime factors"
        ],
        chilis: 2
    },
    {
        id: 23,
        title: 'Days of the week',
        text: "In some years, July (which has 31 days) has exactly 4 Mondays and 4 Fridays.  During these years, what day of the week is the 4th of July?",
        hints: [
            "Draw a calendar"
        ],
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 24,
        title: "Flashing lights",
        text: "One construction sign flashes every 6 seconds, and another sign flashes every 10 seconds.  At a certain instant, both signs flash at exactly the same time.  How many seconds elapse until the signs flash simultaneously again?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "prime factors"
        ],
        chilis: 0
    },
    {
        id: 25,
        title: "3 Hoses, 4 Hoses",
        text: "One hose pumps water at a rate of 2.5 gallons per minute.  Three hoses pumping water simultaneously fill a pool in 60 minutes.  How long would it take 4 hoses pumping simultaneously to fill that same pool?",
        hints: [
            "You don't need all of the given data, but you CAN use it."
        ],
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates"
        ],
        chilis: 1
    },
    {
        id: 26,
        title: "Choir practice",
        text: "During rehearsal for the Founder’s day choir program, the director, Mrs. Mazurek, tried 3 different configurations for her choir.  One configuration was to have only rows of 12, one was to have only rows of 15, and one was to have only rows of 20.  Each configuration used every member of the choir, and none of them worked, because in each configuration, the last row had one person fewer than the other rows.  What is the fewest number of members this choir could have?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "prime factors",
        ],
        chilis: 1
    },
    {
        id: 27,
        title: "Making punch",
        text: "The recipe for Dave's tropical punch calls for 6 cups of pineapple juice, 5 cups of orange juice, and 3 cups of coconut milk.   If we have 70 cups of pineapple juice, 40 cups of orange juice, and 30 cups of coconut milk, how many cups of Dave's tropical punch will we be able to make?",
        hints: [
            "How many batches can you make?"
        ],
        wrongAnswers: null,
        categories: [
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 28,
        title: "The piggy bank",
        text: "A piggy bank is filled with coins: nickles, dimes, and quarters (these are the only types). For every 2 nickels there are 3 dimes.  For every 2 dimes there are 5 quarters. If there are 500 coins in total, how much money is in the piggy bank?",
        hints: [
            "For every 6 dimes there are how many nickles? how many quarters?"
        ],
        wrongAnswers: null,
        categories: [
            "many variables",
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 29,
        title: "Counting diagonals",
        text: "A square has two diagonals, a pentagon has five.  How many diagonals does an octagon have?",
        hints: [
            "Square -> 2, pentgon -> 5, hexagon -> ?  Find a pattern in this sequence."
        ],
        wrongAnswers: null,
        categories: [
            "combinatorics"
        ],
        chilis: 1
    },
    {
        id: 31,
        title: "Toothpick houses",
        text: "In the image above, 6 toothpicks are used to form Figure 1.  11 toothpicks are used to form Figure 2, and 16 toothpicks are used to form Figure 3.  How many toothpicks would be needed to form Figure 50?",
        hint: [
            "How many toothpicks does each ADDITIONAL house take?"
        ],
        wrongAnswers: null,
        categories: [
            "series"
        ],
        chilis: 1
    },
    {
        id: 33,
        title: "Colored shapes",
        text: "Which of the shapes in the image breaks the pattern? How should that shape be fixed?",
        hints: null,
        wrongAnswers: null,
        categories:[
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 34,
        title: "Laps on laps",
        text: "Two people start running in the same direction from the starting line on a quarter-mile long track.  One of them runs 4 miles per hour (mph) and the other runs at 8 mph.  How many times will they be at the same point on the track if they run for 8 hours, including their starting point and perhaps their ending point?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 35,
        title: "How old is Ben?",
        text: "Five years ago, Ben was 3 times as old as his daughter.  If his daughter is 17 years old now, how old is Ben now?",
        hints: [
            "5 years ago, how old was Ben's daughter? How old was he?"
        ],
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 0
    },
    {
        id: 36,
        title: "Alternating fun",
        text: "What is 100 - 99 + 98 - 97 + … - 3 + 2 - 1 ?",
        hints: [
            "Try calculating this alternating expression in pairs."
        ],
        categories: [
            "series",
            "telescoping"
        ],
        chilis: 0
    },
    {
        id: 37,
        title: "Optimal area",
        text: "All the sides of a rectangle are whole numbers.  If it has area 60 square feet, what is the smallest possible perimeter it could have?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "inequality",
            "number theory",
            "quadratics"
        ],
        chilis: 0
    },
    {
        id: 39,
        title: "Ducks in a line",
        text: "When six ducks sit next to each other in a row on a log, Amy sits next to Ben, Carl does not sit next to Diane, and Eddie sits somewhere to Fiona's left.  In addition, Amy sits somewhere to Carl's right, Ben sits next to Eddie, and Diane sits somewhere to Fiona's left.  If Amy is somewhere to Eddie's right, what are the initials of the friends from left to right?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 0
    },
    {
        id: 41,
        title: "The juice is loose",
        text: "There are two pitchers of orange juice at a party. Pitcher A is 80% water and 20% orange juice concentrate.  Pitcher B is 90% water and 10% concentrate.  You want a 10 oz. drink that is 83% water and 17% concentrate.  How much of pitcher A will you need to mix with pitcher B to get the desired concentration?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 42,
        title: "Office supplies",
        text: "A pencil and five paper clips weighs the same as two erasers. A pencil weighs the same as 29 paper clips.  How many paper clips weigh the same as three erasers and two pencils?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 0
    },
    {
        id: 43,
        title: "Test scores",
        text: "The test score of 4 students was 80%.  One more student takes the test and the class average drops to 75%.  What was the score of the last student to take the test?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "averages",
            "percents"
        ],
        chilis: 1
    },
    {
        id: 44,
        title: "75 Lore",
        text: "What is the smallest positive multiple of 75 that has exactly 75 positive integer factors (including 1 and the number itself)?",
        hints: [
            "How can a number have an odd number of factors?"
        ],
        wrongAnswers: null,
        categories: [
            "number theory",
            "prime factors"
        ],
        chilis: 3
    },
    {
        id: 45,
        title: "Prime products",
        text: "What is the units (ones) digit of the product of the first 99 prime numbers?",
        hints: [
            "It will divisible by 5..."
        ],
        wrongAnswers: null,
        categories: [
            "number theory",
            "prime factors"
        ],
        chilis: 1
    },
    {
        id: 46,
        title: "Mixed nuts",
        text: "Three kinds of nuts are mixed in a can.  You begin taking them out one by one and sorting them into piles according to their type.  How many nuts must you take out to ensure that at least one of your piles has at least 5 nuts in it?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "pigeon hole principal"
        ],
        chilis: 0
    },
    {
        id: 47,
        title: "Sharing pennies",
        text: "We have 17 pennies to divide among Spencer, Nadav, Ryan, and Jude.  If Spencer must get at least 4 pennies, Nadav at least 3, Ryan at least 2, and Jude at least 1, how many ways can we distribute these pennies?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "stars and bars"
        ],
        chilis: 2
    },
    {
        id: 48,
        title: "Runnin up that hill",
        text: "Kate ran up a hill at 4 mph and came down the hill at 6 mph. The whole trip took her 2 hours.  How far, in miles, is it to the top of the hill?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates",
            "average speed"
        ],
        chilis: 1
    },
    {
        id: 49,
        title: "Riding Roy",
        text: "Roy rode his scooter from home to the beach and returned along the same path.  He traveled at a constant speed of 30mph to the beach and Roy’s average speed for the whole trip was 24mph.  How fast did he travel on the way back?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates",
            "average speed"
        ],
        chilis: 1

    },
    {
        id: 50,
        title: "Mr. Sampson's drive",
        text: "Mr. Sampson is going to the zoo.  He travels at 1 mph above the speed limit (it is constant) on the way to the zoo and speeds 10 mph above the speed limit on his way home.  He tells you that his average speed was 40 mph.  What is the speed limit?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates",
            "average speed"
        ],
        chilis: 1
    },
    {
        id: 51,
        title: "Paddling upstream",
        text: "Morten paddled his canoe upstream for 1 hour and downstream for 2.  The rate of the current was 3 mph.  When he stopped, Morten looked at his GPS and determined that he was 14 miles downstream from where he had started.  How many hours will it take him to paddle back to his starting point, assuming that he paddles with a constant effort?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "rates",
            "average speed"
        ],
        chilis: 1
    },
    {
        id: 52,
        title: "Slow cycling",
        text: "A cyclist rides 30 miles at an average speed of 9 mph.  At what rate must she cover the next 10 miles in order to bring her overall average speed up to 10 mph?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates",
            "average speed"
        ],
        chilis: 1,
    },
    {
        id: 53,
        title: "Average speeds",
        text: "A boy walks 1 mile at 2 mph and 1 mile at 4 mph, while a girl walks 1 hour at 2 mph and 1 hour at 4 mph. Calculate each childs average speed over their whole walk, and state which child moved faster on average.",
        hints: null,
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates",
            "average speed"
        ],
        chilis: 1
    },
    {
        id: 55,
        title: "Faucet flow",
        text: "Three faucets are pouring water into a container.  One would fill the container in 6 hours by itself, another in 8 hours and the last in 12 hours.  Additionally, outflow from the container would empty it in one day (24hrs).  How long, to the nearest minute, does the container take to fill from empty?",
        hints: [
            "How much of the container is filled in 1 hour?"
        ],
        wrongAnswers: null,
        categories: [
            "proportional reasoning",
            "inverse proportion",
            "rates",
            "harmonic mean"
        ],
        chilis: 2
    },
    {
        id: 56,
        title: "Flower bouquets",
        text: "Flowers are sold in bouquets of 6 and 13.  If you wanted to purchase exactly 24 flowers, you could buy four small bouquets (4 bouquets with 6 flowers in each is exactly 24 flowers).  If you wanted to purchase exactly 25 flowers, you could buy two small bouquets and one large bouquet.  If you wanted to buy exactly 26, you would get two large bouquets.  There is no way, however, to purchase exactly 27 flowers.  27 is not a unique number: you also cannot purchase 20 flowers, 40 flowers, and many other numbers of flowers.  What is the largest number of flowers that cannot be purchased exactly? ",
        hints: null,
        wrongAnswers: null,
        categories: [
            "number theory",
            "prime factors",
            "potpourri"
        ],
        chilis: 2
    },
    {
        id: 57,
        title: "Six balls",
        text: "There are six balls on a table divided evenly into three sets by color: there are two gray balls, two purple, and two green.  In each of the three sets, there is one heavy ball and one light ball.  Each of the three heavy balls weigh exactly the same, as do each of the light balls.  There is a balance scale on the table: each bowl can fit any number of balls.  Your task is to determine the heavy ball in each of the three sets by using the balance scale only twice.  How can you do this?  Note that the heavy and light balls are extremely close in weight (say 1.00lbs for a light ball and 1.01lbs for a heavy ball, so that they feel the same to human senses but will still tip the scales).",
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 2
    },
    {
        id: 58,
        title: "The three children",
        text: `A census taker approaches a woman's house, inquiring about the ages of her three children.  She agrees to give him the information, but in the form of a riddle.  She tells him: "If you add the ages of my children, you will get my house number.  If you multiply their ages, the result is 72."  The census taker thinks for a moment and replies "I still don't know their ages." She replies: "Oh, you're right!  I forgot to mention that only my oldest was born in the summer!" The census taker then records the children's ages, thanks the woman for her time, and continues on his way.  What are the ages of the children?`,
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 2
    },
    {
        id: 59,
        title:"Officers holding hands",
        text: "Members of the local police department stand in a circle to join hands and speak affirmations to one another.  They are evenly spaced, and the officers are numbered consecutively starting from 1. Officer #17 stands directly across form officer #55.  How many police officers are in the hand-holding circle?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics"
        ],
        chilis: 0
    },
    {
        id: 60,
        title: "Climbing stairs",
        text: "Nico climbs a flight of 15 stairs to get to his office every day.  He can take steps one at a time, two at a time, or in any combination of ones and twos. For example, he could climb the stairs by stepping on stair 2, then stair 4, then stair 6, then stair 8, then stair 10, then stair 12, then stair 13, and then finally stair 15 (the landing).  He could also climb the stairs in a different way: using stairs 1, 3, 5, 6, 7, 9, 10, 12, 14, and 15.  These are just two of many ways he can climb the stairs: how many different ways can Nico climb the stairs to work?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
        ],
        chilis: 3
    },
    {
        id: 61,
        title: "Kids in a row",
        text: "(1963 IMO problem 6) Five students, A,B,C,D,E, took part in a contest. One prediction was that the contestants would finish in the order ABCDE. This prediction was very poor. In fact no contestant finished in the position predicted, and no two contestants predicted to finish consecutively actually did so. A second prediction had the contestants finishing in the order DAECB. This prediction was better. Exactly two of the contestants finished in the places predicted, and two disjoint pairs of students predicted to finish consecutively actually did so. Determine the order in which the contestants finished.",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics"
        ],
        chilis: 2
    },
    {
        id: 62,
        title: "A drunk ladybug",
        text: "A drunk ladybug stumbles around the coordinate plane for exactly two minutes.  It begins at the origin and every second, it moves exactly one unit in one of the four cardinal directions (+x, -x, +y, -y).  In how many different locations (x, y) could it be when the timer runs out?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "number theory"
        ],
        chilis: 2
    },
    {
        id: 63,
        title: "A Johnson solid",
        text: `A tridiminished rhombicosidodecahedron is a so-called "Johnson solid" because it is a non-uniform convex polyhedra whose faces are regular polygons. This particular solid has 32 faces: 5 triangles, 15 squares, 9 pentagons, and 3 decagons.  How many vertices does the tridiminished rhombicosidodecahedron have?`,
        hints: [
            "How many edges must the solid have?",
            "Google Euler characteristic"
        ],
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "graph theory"
        ],
        chilis: 1
    },
    {
        id: 64,
        title: "Moving marbles",
        text: "There are 10 children in a row, some boys and some girls. Then the headmaster distributes marbles among the children in such a way that the total number of marbles held by girls was equal to the total number of marbles held by boys. Next, each child gave a marble to every child standing to the right of him (or her). After that, the total number of marbles girls had increased by 25. How many girls are there in the row?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 65,
        title: "Shaking hands",
        text: "A group of two hundred people, 105 women and 95 men, is randomly divided into two rows of 100 people each.  Each person in one row is directly opposite a person in the other row, and the opposite pairs shake hands.  How many more 'women-women' handshakes are there than 'man-man' handshakes?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 66,
        title: "Cycling at sunrise",
        text: "Two towns, Alexandria and Boston, are connected by a road.  At sunrise, James begins cycling from Alexandria to Boston, while simulatenously Kaylee begins from Boston to Alexandria.  Each person cycles at a constant speed, and they cross paths at noon.  James reaches Boston at 5 p.m. while Kaylee reaches Alexandria at 11:15 p.m.  What time was sunrise?",
        hints: ["draw a space-time diagram"],
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 2
    },
    {
        id: 67,
        title: "Particle mixing",
        text: "A bubble-chamber contains three types of sub-atomic particles: 1998 particles of type X, 2002 of type Y, and 2003 of type Z.  Whenever an X and Y particle collide, they both become type Z.  Likewise, Y and Z particles collide and become X particles, and X and Z particles become Y particles upon collision.  Certainly the total number of particles will never change, but is it possible that they can evolve so that only one type of particle is present?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "potpourri"
        ],
        chilis: 2
    },
    {
        id: 68,
        title: "A shortest path",
        text: "Find the length of the shortest path from the point (5,6) to the point (10,2) that touches both the x and y axes.",
        hints: "First find the shortest path that touches JUST the x-axis.  What can you learn from this solution?",
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 2
    },
    {
        id: 69,
        title: "Frogtagon",
        text: "Let A and E be opposite vertices on a regular octagon.  A frog starts at vertex A.  From any vertex except E, it jumps to one of the two adjacent vertices.  When it reaches E it stops.  Find the number of distinct paths the frog can take from A to E that require exactly 14 jumps.",
        hints: null,
        wrongAnswers: null,
        categories: [
            "combinatorics",
            "potpourri"
        ],
        chilis: 3
    },
    {
        id: 70,
        title: "A chemist's concoction",
        text: "A chemist needs a 25% solution of acid, but he has on hand two others: a 15% solution and a 30% solution.  How much of each of these must he use to make 12 liters of 25% solution?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 71,
        title: "Hungry hippos",
        text: "Suppose you have a grassy field, and hippos eat grass at a constant rate.  Keep in mind, the grass keeps growing continuously.  48 hippos can clear all the grass off the field in 90 days.  120 hippos, however, will clear all the grass in 30 days.  (They are three times faster, even though they are not three times as many in number, because the grass has less time to grow.)  How many hippos would be needed to clear all of the grass in 20 days?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 2
    },
    {
        id: 72,
        title: "River boats",
        text: "Two boats are crossing the river from opposite sides.  When they first meet, they are 720 feet from the northern shore.  When they reach the opposite shores, they stop for 10 minutes and then cross the river again, but this time they meet 400 ft from the southern shore.  How wide is the river?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 73,
        title: "Trucker time",
        text: "There once was a trucker with a mighty fine truck.  Going up hill, its maximum speed was 56 mph.  Going downhill, its maximum speed was 72 mph, and on level ground its maximum speed is 63 mph.  If it takes our trucker 4 hours to drive pedal-to-the-metal from X to Y, and 5 hours to return in the same fashion, how far is X from Y?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 1   
    },
    {
        id: 74,
        title: "Ping Pongers",
        text: "Bob, Alice, and Garfunkle decided to play ping pong.  Only two people can play at a time, so they agree that two of them will start playing, and then whoever loses the game will swap out with the player who was sitting out.  Bob played 15 games, Alice played 10 games, and Garfunkle played 17 games.  Who lost the second game?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 75,
        title: "The mixing tank",
        text: "A tank contains 40 gallons of a solution composed of 90% water and 10% alcohol.  A second solution containing half water and half alcohol is added to the tank at the rate of 4 gallons per minute.  At the same time, the tank is being drained at the same rate of 4 gallons per minute, so that the total volume of the tank remains at 40 gallons.  Assuming that the solution is stirred constantly, how much alcohol will be in the tank after 10 minutes?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 76,
        title: "Cats, rabbits, and dogs",
        text: "I have only cats, rabbits, and dogs.  Eight of my pets aren't dogs, five aren't rabbits, and seven aren't cats.  How many pets do I have?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 1
    },
    {
        id: 77,
        title: "Sleepy chameleons",
        text: "1337 sleepy chameleons sit around the table.  Chameleons can be red, green, or blue.  Every hour, when the clocktower rings, every chameleon wakes up, looks at its two neighbors simultaneous and changes its color.  If both of the neighbors were of the same color, the chameleon decides to blend in and changes color to that one.  If the neighbors' colors differ, the chameleon decides to stick out and changes color to the third one.  All chameleons change colors simultaneously and then go back to sleep.  Can you be sure that at some point the colour pattern around the table returns to the initial state?  Is it possible that they never return to the initial state?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "potpourri"
        ],
        chilis: 3
    },
    {
        id: 78,
        title: "Von Neumman's nuisance",
        text: "At 12:00 pm, two trains leave from two towns that are 100 miles apart, traveling towards one another.  The first train travels at 20 mph, while the second travels at 30 mph.  A tenacious little fly decides to fly back and forth between the trains as they go.  It begins at noon, perched on the slow train and flies at 40mph towards the fast train.  When it reaches the fast train, it immediately turns around and flies back to the slow train.  When it reaches the slow train, it again turns back towards the fast train, all the while flying at 40 mph.  Eventually, the trains meet, at which point the fly decides to take a rest.  How far did the fly travel altogether?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 79,
        title: "Turtle race",
        text: "The teenage mutant ninja turtles and the brady brothers decide to run a 4x100 relay race.  Leonardo runs at a pace of 28mph, Donatello runs at 21 mph, Raphael runs at 30mph, and Michelangelo runs at 12mph. The Brady brothers (who are famously identical quadruplets) each run at the exact same pace of 21mph.  Which team wins the race?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 1
    },
    {
        id: 80,
        title: "Plowing snow",
        text: "It starts snowing in the morning and continues steadily throughout the day.  A snowplow that removes snow at a constant rate starts plowing at noon.  It plows 2 miles in the first hour, but only 1 mile in the second (during both hours, it removed equal volumes of snow).  What time did it start snowing?",
        hints: null,
        wrongAnswers: null,
        categories: [
            "rates",
            "proportional reasoning"
        ],
        chilis: 2
    }

]