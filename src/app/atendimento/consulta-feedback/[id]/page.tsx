'use client'

import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import { ArrowLeft, CheckCircle, Clipboard, User, Calendar, Activity } from "lucide-react"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }: {params:{id: number}}) {

    const mock={
        "doenca": "Malária",
        "localidadeInfeccao": "Rio Tocantins, Tocantins, TO",
        "solicitacaoExame": "sim",
        "dataSolicitacao": "2024-10-01",
        "exameSolicitado": "Exame de Gota Espessa",
        "dataProvavelExame": "2024-10-05",
        "nomeExaminador": "Carlos Almeida",
        "nomeMedico": "Dr. Fernando Souza",
        "crmMedico": "CRM-SP 123456",
        "tipoMaterial": "Sangue Venoso"
        };

    const [doenca, setDoenca] = useState<any>(mock);
    const [isLoading, setIsLoading] = useState(false)

    // Buscar o paciente ao montar o componente
    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                setIsLoading(true)
                const resposta = await fetch(`http://localhost:3001/pacientes/${params.id}`);
                if (resposta.ok) {
                    const dados = await resposta.json();
                    setDoenca(dados.doenca);
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
                                <h2 className="text-2xl leading-6 font-bold text-white">
                                    Consulta Finalizada
                                </h2>
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Doença
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.doenca}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Localidade Provável de Infecção
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.localidadeInfeccao}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Solicitação de Exame
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.solicitacaoExame}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Data da Solicitação
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.dataSolicitacao}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Exame Solicitado
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.exameSolicitado}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Data Provável do Exame
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.dataProvavelExame}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Nome do Examinador
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.nomeExaminador}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Nome do Médico
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.nomeMedico}</dd>
                                </div>

                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        CRM do Médico
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.crmMedico}</dd>
                                </div>

                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Tipo de Material Coletado
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">{doenca.tipoMaterial}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link
                            href={'/prontuario'}
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
