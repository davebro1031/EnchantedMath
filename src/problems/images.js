import p29_pentagon_diagonals from '../images/p29_pentagon_diagonals.png'
import p29_square_diagonals from '../images/p29_square_diagonals.png'
import p29_octagon_question from '../images/p29_octagon_question.png'
import p13_water_bottles from '../images/p13_water_bottles.png'

export const images = [
    {
        id: 13,
        data: [
            {
                key: 1,
                src: p13_water_bottles,
                alt: 'a partially filled water bottle right side up and upside down.'
            }
        ]
    },
    {
        id: 29,
        data: [
            {
                key: 1,
                src: p29_square_diagonals,
                alt: 'a square with both diagonals drawn'

            },
            {
                key: 2,
                src: p29_pentagon_diagonals,
                alt: 'a pentagon with all 5 diagonals drawn'
            },
            {
                key: 3,
                src: p29_octagon_question,
                alt: 'an octagon with a ? in the center'
            }
        ],
    }
]
