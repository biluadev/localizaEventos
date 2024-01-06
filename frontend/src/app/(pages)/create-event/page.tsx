import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { categories } from "@/app/utils/categories";
export default function CreateEvent() {
    return (
        <div className="container m-auto">
            <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
                <div className="mb-4 pr-6 border-r-2 border-[#006962]">
                    <div className="mb-4">
                        <p className="text-green text-2xl font-medium">Adicionar Eventos</p>
                        <p className="text-green text-base font-light">
                            Crie o seu evento da maneira que você preferir! :)
                        </p>
                    </div>

                    <Input
                        title="Título"
                        placeholder="Insira o nome do seu evento"
                        type="text"
                    />

                    <Input
                        title="Endereço"
                        placeholder="Insira o seu endereço"
                        type="text"
                    />

                    <Input
                        title="Cupom"
                        placeholder="Insira o seu endereço"
                        type="text"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            title="Data"
                            placeholder="Insira o seu endereço"
                            type="date"
                        />

                        <Input
                            title="Horário"
                            placeholder="Insira o seu endereço"
                            type="time"
                        />
                    </div>
                    <p className="text-green text-base font-medium mb-4">
                        Crie o seu evento da maneira que você preferir! :)
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                        {categories.map((category) => (
                            <div className="text-green">
                                <input type="checkbox" className="mr-2" />
                                <label htmlFor="">{category.name}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <p className="text-base font-medium text-green">Valor</p>
                        <p className="text-neutral-500 text-sm font-light">
                            Caso seu evento seja gratuito, o campo deverá ficar vazio.
                            Caso haja mais de um sector, basta adicionar a seção. Se houver cupom
                            promocional, basta colocar o código no campo "cupom".
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <Input
                            title="Preço"
                            placeholder="00,00kz"
                            type="text"
                            className="col-span-2"
                        />

                        <Input
                            title="Descrição"
                            placeholder="Insira o nome do sector"
                            type="textarea"
                            className="col-span-3"
                        />
                    </div>
                </div>

                <div className="mb-4 ml-4">
                    <p className="text-green text-2xl font-medium">Adicionar Eventos</p>
                    <p className="text-green text-base font-light">
                        Crie o seu evento da maneira que você preferir! :)
                    </p>
                    <div className="my-4">
                        <p className="text-green text-2xl font-medium">Banner</p>
                        <p className="text-neutral-500 text-sm font-light">
                            Insira um banner no formato 336x280
                        </p>

                        <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                            <InputFile />
                        </div>
                    </div>

                    <div className="my-4">
                        <p className="text-green text-2xl font-medium">Flyers</p>
                        <p className="text-neutral-500 text-sm font-light">
                            Insira até três flyers
                        </p>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile />
                            </div>

                            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile />
                            </div>

                            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile />
                            </div>
                        </div>
                    </div>

                    <div className="my-4">
                        <p className="text-green text-2xl font-medium">Mapa do Evento</p>
                        <p className="text-neutral-500 text-sm font-light">
                            Insira o Mapa do Evento Indicando os Setores
                        </p>

                        <div className="w-full h-64 bg-zinc-300 rounded-3xl shadow">
                            <InputFile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}