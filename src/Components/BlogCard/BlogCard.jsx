import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import notImg from '../../assets/notImg.jpg'
import { MdDeleteForever } from "react-icons/md";
// import Spinners from '../Spinners/Spinners';


export default function BlogCard({ blog, delateAble , handelDelate}) {
    // const navigation = useNavigation();

    // BookMark Delate 


    const { created_at, description, cover_image, id, title } = blog;

    // if(navigation.state === 'loading') return <Spinners></Spinners>

    return (
        <div className='flex relative'>
            <Link to={`/blog/${id}`} className="max-w-sm p-2 mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline  rounded-lg ">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || notImg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs ">{new Date(created_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>

            {
                delateAble && (
                    <div className='absolute bg-primary p-3 hover:scale-105 rounded-full hover:bg-opacity-60 opacity-80 ml-[400px] -top-5 cursor-pointer'
                    onClick={() => handelDelate(id)}
                    >
                        <MdDeleteForever size={20}
                        className='text-secondary group-hover:text-primary'
                        />
                    </div>
                )

            }
        </div>
    )
}


BlogCard.propTypes = {
    blog: PropTypes.array,

}