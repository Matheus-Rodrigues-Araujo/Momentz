import Image from "next/image"
import userSuggestionsList from '@/userSuggestionsData'
import spiderman from '@/assets/userSuggestions/spiderman.jpg'
import Link from "next/link"
import { UserSuggestionCard } from "./userSuggestionCard"
import { Footer } from "./footer"
export const Aside = () => {

    return (
        <div className="mt-5 w-[250px] flex flex-col gap-5" >
            <div className="flex gap-4" >
                <Image src={spiderman} alt="User profile"  className="object-cover h-14 w-14 rounded-full" />
                <div className="flex flex-col" >
                    <h4 className="text-white font-medium" >TheRealJohnDoe</h4>
                    <Link href={'/'} className="text-customLightBlue text-semibold hover:text-customLighterBlue" >Change</Link>
                </div>
            </div>

            <div className="grid gap-5" >
                <div className="flex justify-between" >
                    <p className="text-white font-normal text-md">Suggestions for you</p>
                    <Link href={'/explore/people'} className="text-white font-bold hover:text-customLightGray" >See all</Link>
                </div>

                {
                    userSuggestionsList.length >=1 && userSuggestionsList.map((item, key) => <UserSuggestionCard key={key} user={item} />)
                }
            </div>
            
            <Footer/>
        </div>
    )
}