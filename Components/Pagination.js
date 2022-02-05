import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router"

const Pagination = () => {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0;

    return (
        <div className="flex justify-between px-8 max-w-lg text-blue-700 ">
            {
                startIndex>=10 &&(
                    <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`} passHref>
                        <div className="flex  flex-col items-center cursor-pointer hover-underline">
                            <ChevronLeftIcon className="h-5"/>
                            Previous
                        </div>
                    </Link>
                )
            }
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`} passHref>
                <div className="flex  flex-col items-center cursor-pointer hover-underline">
                    <ChevronRightIcon className="h-5"/>
                    Next
                </div>
            </Link>
        </div>
    )
}

export default Pagination
