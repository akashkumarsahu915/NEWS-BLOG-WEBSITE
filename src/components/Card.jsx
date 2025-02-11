export default function Card(props) {
    return (
      <div className='bg-slate-200 h-68 w-64 rounded-md m-2 md:w-64 sm:w-64'>
          <span className='absolute bg-red-400 text-xs p-1 rounded-full text-white '>{props.source}</span>
  
         <img className='rounded-md w-full h-36' src={(props.urlToImage==null)?"https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg":props.urlToImage} alt="...." />
         <p className='text-base text-slate-700 pl-2'>{props.title}</p>
         {props.description && (
           <p className='text-sm text-slate-500 pl-2'>
             {props.description.length > 200 ? props.description.substring(0, 130) + "..." : props.description}
           </p>
         )}
         <div className='flex pl-2 justify-between pr-2 mt-1 pb-1'>
            <div>
              <p className='text-xs text-slate-500'>By {!props.author?"Unknown":props.author}</p>
              <p className='text-xs text-slate-500'>At {props.at}</p>
            </div>
            <a href={props.more}>
              <button className='border bg-blue-500 rounded-full p-1 text-xs'>
                Read more
              </button>
            </a>
         </div>
      </div>
    )
  }