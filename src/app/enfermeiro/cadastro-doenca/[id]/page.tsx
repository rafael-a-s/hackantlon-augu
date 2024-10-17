
'use client';

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";

export default function Page({params} : {params: {id: number}}) {
    const [formData, setFormData] = useState({
        doenca: "Malária",
        localidadeInfeccao: "Rio Tocantins, Tocantins, TO",
        solicitacaoExame: "sim",
        dataSolicitacao: "2024-10-01",
        exameSolicitado: "Exame de Gota Espessa",
        dataProvavelExame: "2024-10-05",
        nomeExaminador: "Carlos Almeida",
        nomeMedico: "Dr. Fernando Souza",
        crmMedico: "CRM-SP 123456",
        tipoMaterial: "Sangue Venoso"
    });
    

    const [paciente, setPaciente] = useState<any>(null);

    // Buscar o paciente ao montar o componente
    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                const resposta = await fetch(`http://localhost:3001/pacientes/${params.id}`);
                if (resposta.ok) {
                    const dados = await resposta.json();
                    setPaciente(dados);
                } else {
                    alert("Erro ao buscar paciente.");
                }
            } catch (erro) {
                console.error("Erro na requisição:", erro);
            }
        };

        fetchPaciente();
    }, []);

    const handleInputChange = (evento: any) => {
        const { name, value } = evento.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (evento: any) => {
        evento.preventDefault();

        if (!paciente) {
            alert("Paciente não encontrado.");
            return;
        }

        // Monta o objeto atualizado com a agregação dos dados do formulário
        const pacienteAtualizado = {
            ...paciente,
            doenca: formData
        };

        try {
            const resposta = await fetch(`http://localhost:3001/pacientes/${params.id}`, {
                method: 'PUT', // Usamos PUT para substituir o objeto completo
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pacienteAtualizado),
            });

            if (resposta.ok) {
                alert('Caso registrado com sucesso!');
                setFormData({
                    doenca: "",
                    localidadeInfeccao: "",
                    solicitacaoExame: "",
                    dataSolicitacao: "",
                    exameSolicitado: "",
                    dataProvavelExame: "",
                    nomeExaminador: "",
                    nomeMedico: "",
                    crmMedico: "",
                    tipoMaterial: ""
                });
            } else {
                alert('Erro ao registrar o caso.');
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
                                Registro de Caso de Malária
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6.5">

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="mb-4.5 w-full">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Selecione a Doença</label>
                                        <select
                                            name="doenca"
                                            value={formData.doenca}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                                        >
                                            <option value="">Selecione uma doença</option>
                                            <option value="Malária">Malária</option>
                                            <option value="Dengue">Dengue</option>
                                            <option value="Zika">Zika</option>
                                            <option value="Chikungunya">Chikungunya</option>
                                            <option value="Chagas">Chagas</option>
                                            <option value="Leishmaniose">Leishmaniose</option>
                                            <option value="Tuberculose">Tuberculose</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Localidade Provável de Infecção</label>
                                        <input
                                            type="text"
                                            name="localidadeInfeccao"
                                            placeholder="Informe o local"
                                            value={formData.localidadeInfeccao}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Solicitação de Exame</label>
                                        <select
                                            name="solicitacaoExame"
                                            value={formData.solicitacaoExame}
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
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Data da Solicitação</label>
                                        <input
                                            type="date"
                                            name="dataSolicitacao"
                                            value={formData.dataSolicitacao}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Exame Solicitado</label>
                                        <input
                                            type="text"
                                            name="dataProvavelExame"
                                            value={formData.dataProvavelExame}
                                            onChange={handleInputChange}
                                            placeholder="Informe o exame solicitado"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Data Provável de Exame</label>
                                        <input
                                            type="date"
                                            name="tipoMaterial"
                                            value={formData.tipoMaterial}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Nome do Examinador</label>
                                        <input
                                            type="text"
                                            name="nomeExaminador"
                                            value={formData.nomeExaminador}
                                            onChange={handleInputChange}
                                            placeholder="Informe o nome do examinador"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Nome do Médico</label>
                                        <input
                                            type="text"
                                            name="nomeMedico"
                                            value={formData.nomeMedico}
                                            onChange={handleInputChange}
                                            placeholder="Informe o nome do médico"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/3">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">CRM do Médico</label>
                                        <input
                                            type="text"
                                            name="crmMedico"
                                            value={formData.crmMedico}
                                            onChange={handleInputChange}
                                            placeholder="Informe o CRM"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">Tipo de Material Coletado</label>
                                    <input
                                        type="text"
                                        name="tipoMaterial"
                                        value={formData.tipoMaterial}
                                        onChange={handleInputChange}
                                        placeholder="Informe o tipo de material coletado"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded bg-primary py-3 font-medium text-gray"
                                >
                                    Registrar Doença
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}