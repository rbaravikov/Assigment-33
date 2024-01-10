
const data = [
    {
        header: 'Option 1',
        content: 'Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.'
    },
    {
        header: 'Option 2',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fugiat at aut voluptatem aspernatur cum?'
    },
    {
        header: 'Option 3',
        content: 'Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.'
    },
    {
        header: 'Option 4',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fugiat at aut voluptatem aspernatur cum?'
    }
]

const Option = () => (data.map((option, index) => (
    <div key={index}>
        <h2>{option.header}</h2>
        <p>{option.content}</p>
    </div>
)))

export default Option