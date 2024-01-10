import { BsStack } from "react-icons/bs";
import { FaPalette } from "react-icons/fa";
import { GoInfinity } from "react-icons/go";
import { HiOutlineFingerPrint } from "react-icons/hi2";


const data = [
    {   
        icon: <BsStack />,
        header: 'Option 1',
        color: 'red',
        content: 'Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.'
    },
    {
        icon: <FaPalette />,
        header: 'Option 2',
        color: '',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fugiat at aut voluptatem aspernatur cum?'
    },
    {
        icon: <GoInfinity />,
        header: 'Option 3',
        color: '',
        content: 'Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.'
    },
    {
        icon: <HiOutlineFingerPrint />,
        header: 'Option 4',
        color: 'red',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fugiat at aut voluptatem aspernatur cum?'
    }
]

const Option = () => (data.map((option, index) => (
    <div key={index} color='black'>
        {option.icon}
        <h2>{option.header}</h2>
        <p>{option.content}</p>
    </div>
)))

export default Option