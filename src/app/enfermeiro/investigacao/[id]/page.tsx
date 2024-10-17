
'use client';

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";

export default function Page({params} : {params: {id: number}}) {
    const [formData, setFormData] = useState({
        resultado: "",
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
            doenca: {
                ...paciente.doenca,
                resultado: formData.resultado
            }
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
                    resultado: "",
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
                                Investigação
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6.5">

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">Resultado</label>
                                        <select
                                            name="resultado"
                                            value={formData.resultado}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="positivo">Positivo</option>
                                            <option value="negativo">Negativo</option>
                                            <option value="indeterminado">Indeterminado</option>
                                        </select>
                                    </div>
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