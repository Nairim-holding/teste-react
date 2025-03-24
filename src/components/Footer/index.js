import instagram from "../../assets/Instagram_logo.png";
import twitter from "../../assets/Twitter_logo.png";
import facebook from "../../assets/Facebook_logo.png";

export default function Footer(){
    return(
    <><section className="p-[30px] w-full flex flex-row bg-zinc-900 gap-[7em]">
            <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
                <h1 className="font-bold text-stone-50">Empresa</h1>
                <button className="text-zinc-400 hover:underline decoration-1">Sobre</button>
                <button className="text-zinc-400 hover:underline decoration-1">Empregos</button>
                <button className="text-zinc-400 hover:underline decoration-1">For the Record</button>
            </div>

            <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
                <h1 className="font-bold text-stone-50">Comunidades</h1>
                <button className="text-zinc-400 hover:underline decoration-1">Para artistas</button>
                <button className="text-zinc-400 hover:underline decoration-1">Desenvolvedores</button>
                <button className="text-zinc-400 hover:underline decoration-1">Publicidade</button>
                <button className="text-zinc-400 hover:underline decoration-1">Investidores</button>
                <button className="text-zinc-400 hover:underline decoration-1">Fornecedores</button>
            </div>

            <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
                <h1 className="font-bold text-stone-50">Links úteis</h1>
                <button className="text-zinc-400 hover:underline decoration-1">Suporte</button>
                <button className="text-zinc-400 hover:underline decoration-1">Aplicativo móvel grátis</button>
            </div>

            <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
                <h1 className="font-bold text-stone-50">Planos do Spotify</h1>
                <button className="text-zinc-400 hover:underline decoration-1">Premium Individual</button>
                <button className="text-zinc-400 hover:underline decoration-1">Premium Duo</button>
                <button className="text-zinc-400 hover:underline decoration-1">Premium Família</button>
                <button className="text-zinc-400 hover:underline decoration-1">Premium Universitário</button>
                <button className="text-zinc-400 hover:underline decoration-1">Spotify Free</button>
            </div>

            <div className="p-[30px] w-full flex justify-end gap-[1em]">
                <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center"><img src={instagram} className="h-5 w-5 invert"></img></button>
                <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center"><img src={twitter} className="h-5 w-5 invert"></img></button>
                <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center"><img src={facebook} className="h-6 w-6 invert"></img></button>
            </div>
        </section>
        <div className="p-[30px] flex flex-col bg-zinc-900">
        <hr className="border-stone-600"></hr>
        <h1 className="p-[30px] text-zinc-400">© 2025 Spotify AB</h1>
        </div>
        </>
    
)
}


