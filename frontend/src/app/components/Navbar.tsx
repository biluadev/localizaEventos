import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="bg-nav-bar flex mx-auto px-6 absolute top-0 w-full h-16 items-center">
            <Image 
                src="/logo2.png" 
                alt="Logo" 
                width={150} 
                height={150}
                className="mr-[6rem]" 
            />

            <div className="flex items-center w-[50vw]">
                <input 
                    className="w-full rounded-md px-3 py-2 text-sm font-normal"
                    type="text"
                    placeholder="Insira o nome ou endereço do seu evento aqui" 
                />
            </div>
        </nav>
    );
};