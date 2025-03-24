import instagram from "../../assets/Instagram_logo.png";
import twitter from "../../assets/Twitter_logo.png";
import facebook from "../../assets/Facebook_logo.png";

export default function Footer(){
    return(
    <section className="p-[30px] h-20em flex flex-row bg-zinc-900 gap-[7em]">
        <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
        <h1 className="font-bold">Empresa</h1>
        <h1 className="text-zinc-400">Sobre</h1>
        <h1 className="text-zinc-400">Empregos</h1>
        <h1 className="text-zinc-400">For the Record</h1>
        </div>

        <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
        <h1 className="font-bold">Comunidades</h1>
        <h1 className="text-zinc-400">Para artistas</h1>
        <h1 className="text-zinc-400">Desenvolvedores</h1>
        <h1 className="text-zinc-400">Publicidade</h1>
        <h1 className="text-zinc-400">Investidores</h1>
        <h1 className="text-zinc-400">Fornecedores</h1>
        </div>

        <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
        <h1 className="font-bold">Links úteis</h1>
        <h1 className="text-zinc-400">Suporte</h1>
        <h1 className="text-zinc-400">Aplicativo móvel grátis</h1>
        </div>

        <div className="p-[30px]  bg-zinc-900 flex flex-col dark:text-white gap-[5px]">
        <h1 className="font-bold">Planos do Spotify</h1>
        <h1 className="text-zinc-400">Premium Individual</h1>
        <h1 className="text-zinc-400">Premium Duo</h1>
        <h1 className="text-zinc-400">Premium Família</h1>
        <h1 className="text-zinc-400">Premium Universitário</h1>
        <h1 className="text-zinc-400">Spotify Free</h1>
        </div>

        <div className="p-[30px] w-full flex justify-end gap-[1em]">
        <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center"><img src={instagram} className="h-5 w-5 invert"></img></button>
        <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center"><img src={twitter} className="h-5 w-5 invert"></img></button>
        <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center"><img src={facebook} className="h-6 w-6 invert"></img></button>
        </div>

    </section>
    
)
}


