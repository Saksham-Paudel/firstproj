import { Link } from "react-router-dom"

function Card(props){
    return(
        <>
        <Link to={`/single/${props.blog._id}`}>
        <div class="flex px-3 py-3">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{props.blog.title}</div>
            <p class="text-gray-700 text-base">
                {props.blog.description}           </p>
        </div>
        <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
    </div>
</div>
        </Link>
        </>
    )
}
export default Card