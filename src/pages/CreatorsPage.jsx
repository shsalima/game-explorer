import CartCreator from "../components/creators/CartCreator";
import CreatorHero from "../components/creators/CreatorHero";


export default function CreatorsPage(){
    return(
        <div className="bg-[#020617]">
            <div className="container">
                <CreatorHero/>
                <CartCreator/>
            </div>

        </div>
    )
}