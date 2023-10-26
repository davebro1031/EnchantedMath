
export default function Solutions({ solution }) {
    const solutions = solution.solutions
    return (
        <Box>
            <Text>{solution.answer}</Text>
            {solutions.map((solution, index) => {
                return (
                    <Box>
                        <Text>{["Solution", solutions.length > 1 ? index : null].join(" ")}</Text>
                        <Text>{solution}</Text>
                    </Box>

                )
            }

            )}
        </Box>
    )
}