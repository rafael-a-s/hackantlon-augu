'use client';
import { TuberculoseForm } from "@/components/doencas/Tuberculose";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [selectedDisease, setSelectedDisease] = useState("");
    const router = useRouter();

    const [formData, setFormData] = useState({
        nomeCompleto: "João da Silva",
        nomeResponsavel: "Maria Oliveira",
        ddd: "11",
        telefone: "987654321",
        idade: "35",
        sexo: "M",
        gestante: "não",
        escolaridade: "Ensino Superior Completo",
        racaCor: "Parda",
        nomeMae: "Ana da Silva",
        atividadePrincipal: "Comerciante",
        status: "triagem",
        endereco: "Rua das Flores, 123, Tocantins, TO"
    });
    

    const handleInputChange = (evento: any) => {
        const { name, value } = evento.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDoencaChange = (evento: any) => {
        setSelectedDisease(evento.target.value);
    };

    const handleSubmit = async (evento: any) => {
        evento.preventDefault();
        const dadosPaciente = { ...formData, doenca: selectedDisease };

        try {
            const resposta = await fetch('http://localhost:3001/pacientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosPaciente)
            });

            if (resposta.ok) {
               
                setSelectedDisease("");
                const data = await resposta.json();
                router.push('/atendimento/triagem/sucess/'+data.id);                

                setFormData({
                    nomeCompleto: "",
                    nomeResponsavel: "",
                    ddd: "",
                    telefone: "",
                    idade: "",
                    sexo: "",
                    gestante: "",
                    escolaridade: "",
                    racaCor: "",
                    nomeMae: "",
                    atividadePrincipal: "",
                    status: "triagem",
                    endereco: ""
                });
                
            } else {
                alert('Erro ao registrar paciente.');
            }
        } catch (erro) {
            console.error('Erro na requisição:', erro);
            alert('Erro ao conectar com o servidor.');
        }
    };

    return (
        <DefaultLayout>
            <div className="flex w-full h-full">
                <div className="flex flex-col gap-9 w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Registro de Paciente
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Nome Completo</label>
                                        <input
                                            type="text"
                                            name="nomeCompleto"
                                            value={formData.nomeCompleto}
                                            onChange={handleInputChange}
                                            placeholder="Informe o nome"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Nome do Responsável</label>
                                        <input
                                            type="text"
                                            name="nomeResponsavel"
                                            value={formData.nomeResponsavel}
                                            onChange={handleInputChange}
                                            placeholder="Informe o nome"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/4">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">DDD</label>
                                        <input
                                            type="text"
                                            name="ddd"
                                            value={formData.ddd}
                                            onChange={handleInputChange}
                                            placeholder="DDD"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-3/4">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Telefone</label>
                                        <input
                                            type="text"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                            placeholder="Informe o telefone"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Idade</label>
                                        <input
                                            type="text"
                                            name="idade"
                                            value={formData.idade}
                                            onChange={handleInputChange}
                                            placeholder="Informe a idade"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Sexo</label>
                                        <select
                                            name="sexo"
                                            value={formData.sexo}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Feminino</option>
                                        </select>
                                    </div>

                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Gestante</label>
                                        <select
                                            name="gestante"
                                            value={formData.gestante}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="sim">Sim</option>
                                            <option value="nao">Não</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Escolaridade</label>
                                        <input
                                            type="text"
                                            name="escolaridade"
                                            value={formData.escolaridade}
                                            onChange={handleInputChange}
                                            placeholder="Informe a escolaridade"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Raça/Cor</label>
                                        <input
                                            type="text"
                                            name="racaCor"
                                            value={formData.racaCor}
                                            onChange={handleInputChange}
                                            placeholder="Informe a raça/cor"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Nome da Mãe</label>
                                        <input
                                            type="text"
                                            name="nomeMae"
                                            value={formData.nomeMae}
                                            onChange={handleInputChange}
                                            placeholder="Informe o nome da mãe"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Atividade Principal</label>
                                        <input
                                            type="text"
                                            name="atividadePrincipal"
                                            value={formData.atividadePrincipal}
                                            onChange={handleInputChange}
                                            placeholder="Informe a atividade"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">Endereço Completo</label>
                                    <input
                                        type="text"
                                        name="endereco"
                                        value={formData.endereco}
                                        onChange={handleInputChange}
                                        placeholder="Informe o endereço"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                            
                                {selectedDisease === "Tuberculose" && <TuberculoseForm />}

                                <button
                                    type="submit"
                                    className="w-full rounded bg-primary py-3 font-medium text-gray"
                                >
                                    Registrar Paciente
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
