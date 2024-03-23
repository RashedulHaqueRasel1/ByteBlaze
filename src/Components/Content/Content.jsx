import { useLoaderData } from "react-router-dom";
import notImg from '../../assets/notImg.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

export default function Content() {

    const blog = useLoaderData();


 



    const { created_at, description, body_html, cover_image, id, tags, title, url } = blog;

    return (
        <div className="  mx-auto group  border-2 p-4  border-primary  border-opacity-30 hover:no-underline focus:no-underline  rounded-lg ">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || notImg} />
            <div className="flex flex-wrap py-6 gap-2 ">
                {
                    tags.map((tag) => <a key={id} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline  text-gray-900">#{tag}</a>)
                }
            </div>
            <div className="p-6 space-y-2">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <span className="text-xs ">{new Date(created_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
            <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>



        </div>



    )
}
