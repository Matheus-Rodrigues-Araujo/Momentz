import Image from "next/image"
import { IUserSuggestion } from "@/interfaces/IUserSuggestion"

export const UserSuggestionCard = ({user}:IUserSuggestion) =>{
    return (
        <div className="flex justify-between items-center" >
            <Image src={user.profileImage} alt="User profile"  className="object-cover h-14 w-14 rounded-full" />
            <div className="flex flex-col" >
                <h4 className="text-white font-medium" >{user.username}</h4>
                <p className="text-customLighterPink text-thin text-sm" >New on Momentz</p>
            </div>

            <button className="text-customLightBlue text-semibold hover:text-customLighterBlue" >Follow</button>
        </div>
    )
}