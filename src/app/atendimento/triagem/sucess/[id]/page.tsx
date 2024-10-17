'use client'

import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import { ArrowLeft, CheckCircle, Clipboard, User, Calendar, Activity } from "lucide-react"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }: {params:{id: number}}) {

    const mock={
        "nomeCompleto": "João da Silva",
        "nomeResponsavel": "Maria Oliveira",
        "ddd": "11",
        "telefone": "987654321",
        "idade": "35",
        "sexo": "M",
        "gestante": "não",
        "escolaridade": "Ensino Superior Completo",
        "racaCor": "Parda",
        "nomeMae": "Ana da Silva",
        "atividadePrincipal": "Comerciante",
        "endereco": "Rua das Flores, 123, São Paulo, SP",
    };

    const [paciente, setPaciente] = useState<any>(mock);
    const [isLoading, setIsLoading] = useState(false)

    // Buscar o paciente ao montar o componente
    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                setIsLoading(true)
                const resposta = await fetch(`http://localhost:3001/pacientes/${params.id}`);
                if (resposta.ok) {
                    const dados = await resposta.json();
                    setPaciente(dados);
                    console.log(dados)
                } else {
                    alert("Erro ao buscar paciente.");
                }

                setIsLoading(false)
            } catch (erro) {
                setIsLoading(false)
                console.error("Erro na requisição:", erro);
            }
        };

        fetchPaciente();
    }, []);

    return (
        <DefaultLayout>
            {
                isLoading ? <Loader/> :
                <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="bg-primary px-4 py-5 sm:px-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl leading-6 font-bold text-white">Cadastro Clínico Realizado</h2>
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                                        <User className="h-5 w-5 mr-2 text-gray-400" />
                                        Nome Completo
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.nomeCompleto}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Nome do Responsável</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.nomeResponsavel}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        ({paciente.ddd}) {paciente.telefone}
                                    </dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Idade</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.idade} anos</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Gênero</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.sexo}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Gestante</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.gestante}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Escolaridade</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.escolaridade}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Raça/Cor</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.racaCor}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Nome da Mãe</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.nomeMae}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Atividade Principal</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.atividadePrincipal}</dd>
                                </div>

                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">Endereço</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{paciente.endereco}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link
                            href={'/atendimento'}
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Voltar ao Painel
                        </Link>
                    </div>
                </div>
            </div>
            }
        </DefaultLayout>
    )
}
