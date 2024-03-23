import { Link, useLoaderData, useNavigation } from "react-router-dom"
import notImg from '../../src/assets/notImg.jpg'
import BlogCard from "../Components/BlogCard/BlogCard";
import Spinners from "../Components/Spinners/Spinners";


export default function Blogs() {

	const navigation = useNavigation();


	const blogs = useLoaderData();
	// console.log(blogs)


	if(navigation.state === 'loading') return <Spinners></Spinners>

	return (
		<section className="">
			<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
				<Link to={`/blog/${blogs[0].id}`} rel="noopener noreferrer" href="#" className="block max-w-sm  transition border-2 hover:scale-95 border-primary border-opacity-30 hover:border-secondary gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  rounded-lg ">
					<img src={blogs[0].cover_image || notImg} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
					<div className="p-6 space-y-2 lg:col-span-5">
						<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
						<span className="text-xs  ">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
						<p>{blogs[0].description}</p>
					</div>
				</Link>
				<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


					{
						blogs.slice(1,19).map((blog,id) => <BlogCard key={id} blog={blog}></BlogCard>)
					}

				</div>

			</div>
		</section>
	)
}
