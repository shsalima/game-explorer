import axios from "axios"
import { useEffect, useState } from "react"



export default function CartCreator(){
    const [creators,setCreators]=useState([])
    const [loading,setLoading]=useState(true)


    const {VITE_API_KEY,VITE_API_URL}=import.meta.env


    useEffect(()=>{
        const getCreatorData= async ()=>{
            try{
                const response=await axios.get(`${VITE_API_URL}/creators?key=${VITE_API_KEY}`)
              
                // console.log(response)
                setCreators(response.data.results)
                setLoading(false)
            }catch(error){
                console.error("probléme au recupére data",error)
                setLoading(false)
            }

        }
        getCreatorData()

    },[])
    return(
        <div className="min-h-screen bg-[#020617] text-white">
            <div className="container mx-auto px-4 py-12">
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {creators.map((creator) => (
                            <div key={creator.id} className="group bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={creator.image_background} 
                                        alt={creator.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a10] to-transparent"></div>
                                </div>

                                <div className="p-5 -mt-12 relative z-10">
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                                        {creator.name}
                                    </h3>
                                    <div className="text-[10px] text-blue-400 font-bold uppercase mb-4 tracking-wider">
                                        {creator.positions.slice(0, 2).map(p => p.name).join(" / ")}
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {creator.games.slice(0, 2).map((game) => (
                                            <span key={game.id} className="text-[10px] bg-[#1e293b] text-slate-300 px-3 py-1 rounded-md border border-slate-700">
                                                {game.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    )




}