import { Button } from "@/app/components/Form/Button";
import { Input } from "../../components/Form/Input"
import { InputRange } from "../../components/Form/InputRange"
import { categories } from "@/app/utils/categories"
import { CardFilter } from "@/app/components/CardFilter";

export default function FilterEvents() {
    return (
        <div className="container m-auto">
            <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
                <div className="mb-4 pr-6 border-r-2 border-[#006962]">
                    <div className="mb-4">
                        <p className="text-green text-2xl font-medium">Filtrar Eventos</p>
                        <p className="text-green text-base font-light">
                            Buscar o evento que é a sua cara de maneira mais detalhada! :)
                        </p>
                    </div>

                    <Input
                        title="Nome"
                        placeholder="Insira o nome do seu evento"
                        type="text"
                    />

                    <Input
                        title="Localização"
                        placeholder="Insira o seu endereço"
                        type="text"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            title="Data"
                            placeholder="Insira o seu endereço"
                            type="date"
                        />

                        <div className="text-green">
                            <label htmlFor="">{' '}Categoria</label>
                            <select
                                name=""
                                id=""
                                className="w-full px-6 py-[5px] bg-white rounded-lg border border-[#006962]"
                            >
                                <option value="">Selecione a categoria</option>
                                {categories.map((category) => (
                                    <option value="{category.name}">{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <InputRange title="Distância" />
                    <InputRange title="Valor" />

                    <div className="grid grid-cols-2 gap-7 w-2/3 m-auto">
                        <Button title="Limpar" className="bg-white text-green border border-[green]" />
                        <Button title="Buscar" className="text-white" />
                    </div>

                </div>
                <div className="mb-4 ml-4">
                    <p className="text-green text-2xl font-medium">Adicionar Eventos</p>
                    <p className="text-green text-base font-light">
                        Crie o seu próprio evento da maneira que você preferir! :)
                    </p>

                    <CardFilter />
                    <CardFilter /> 
                </div>
            </div>
        </div>
    );
}