import instagram from "../../assets/Instagram_logo.png";
import twitter from "../../assets/Twitter_logo.png";
import facebook from "../../assets/Facebook_logo.png";

export default function Footer() {
    return (
        <>
            <section className="p-[30px] w-full flex flex-col lg:flex-row bg-zinc-900 gap-4 xl:gap-[7em]">
                <div className="p-[30px] bg-zinc-900 flex flex-col dark:text-white gap-[5px] w-full lg:w-1/2 xl:w-[50em]">
                    <h1 className="font-bold text-stone-50 text-center">Empresa</h1>
                    <button className="text-zinc-400 hover:underline decoration-1">Sobre</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Empregos</button>
                    <button className="text-zinc-400 hover:underline decoration-1">For the Record</button>
                </div>

                <div className="p-[30px] bg-zinc-900 flex flex-col dark:text-white gap-[5px] w-full lg:w-1/2 xl:w-[50em]">
                    <h1 className="font-bold text-stone-50 text-center">Comunidades</h1>
                    <button className="text-zinc-400 hover:underline decoration-1">Para artistas</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Desenvolvedores</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Publicidade</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Investidores</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Fornecedores</button>
                </div>

                <div className="p-[30px] bg-zinc-900 flex flex-col dark:text-white gap-[5px] w-full lg:w-1/2 xl:w-[50em]">
                    <h1 className="font-bold text-stone-50 text-center">Links úteis</h1>
                    <button className="text-zinc-400 hover:underline decoration-1">Suporte</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Aplicativo móvel grátis</button>
                </div>

                <div className="p-[30px] bg-zinc-900 flex flex-col dark:text-white gap-[5px] w-full lg:w-1/2 xl:w-[50em]">
                    <h1 className="font-bold text-stone-50 text-center">Planos do Spotify</h1>
                    <button className="text-zinc-400 hover:underline decoration-1">Premium Individual</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Premium Duo</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Premium Família</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Premium Universitário</button>
                    <button className="text-zinc-400 hover:underline decoration-1">Spotify Free</button>
                </div>

                {/* Redes sociais */}
            <div className="p-[30px] w-full flex lg:items-start flex-row lg:justify-end sm:justify-center sm:items-center gap-4">
                <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center hover:bg-zinc-500">
                    <img src={instagram} className="h-5 w-5 invert" alt="Instagram" />
                </button>
                <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center hover:bg-zinc-500">
                    <img src={twitter} className="h-5 w-5 invert" alt="Twitter" />
                </button>
                <button className="bg-zinc-700 h-10 w-10 rounded-xl flex items-center justify-center hover:bg-zinc-500">
                    <img src={facebook} className="h-6 w-6 invert" alt="Facebook" />
                </button>
            </div>
            </section>

            {/* Copyright */}
            <div className="p-[30px] flex flex-col bg-zinc-900 sm:text-center lg:text-start">
                <hr className="border-zinc-600" />
                <h1 className="p-[30px] text-zinc-400">© 2025 Spotify AB</h1>
            </div>
        </>
    );
}
