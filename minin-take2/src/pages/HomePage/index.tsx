import { useSearchUsersQuery } from "../../github/github.api"

export default function HomePage(){
    const {isError, data} = useSearchUsersQuery('vladilen')
    console.log(data)
    return(
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        {isError && <p className="text-center text-ted-600">Something went wrong</p>}
        <div className="relative w-[560px]">
            <input type="text" className="border py-2 px-4 w-full h-[42px] mb-2" placeholder="Search Github User  by Name..." />
            <div className="absolute top=[42px] left-0 right-0 h-[200px] shadow-md bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, blanditiis.
            </div>
        </div>
      </div>
    )
}