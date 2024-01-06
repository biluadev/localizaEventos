import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";

export default function Dashboard() {
    return (
        //Banner principal
        <div className="container mx-auto">
            <BannerPrimary />
            {/* Evento em Destaque */}
            <div className="p-2 text-green">
                <p className="text-2xl font-medium">Eventos em Destaque</p>
                <p className="text-base font-light">
                    Divirta-se com os melhores eventos de Luanda e de Angola!
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                <BannerSecondary />
                <BannerSecondary />
                <BannerSecondary />
            </div>

            <div className="p-2 text-green">
                <p className="text-2xl font-medium">Navegue por tipo de evento</p>
                <p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
            </div>

            <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
                {categories.map((categorie) => {
                    return (
                        <div className="flex flex-col items-center justify-center cursor-pointer">
                            <img src={categorie.icon} alt="" className="rounded-full" />
                            <p>{categorie.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}