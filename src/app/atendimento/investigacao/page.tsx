'use client'

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { UserCircle, Calendar, Phone, MapPin, ArrowLeft, RefreshCw, Search } from "lucide-react"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {

    const [prontuarios, setProntuarios] = useState<any>(null);

    // Buscar o paciente ao montar o componente
    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                const resposta = await fetch(`http://localhost:3001/pacientes`);
                if (resposta.ok) {
                    const dados = await resposta.json();

                    // Filtrando apenas os registros com status "triado"
                    const registrosFiltrados = dados.filter((registro: any) => registro.status === "consultado");

                    // Atualizando o estado com os registros filtrados
                    setProntuarios(registrosFiltrados);
                } else {
                    alert("Erro ao buscar paciente.");
                }
            } catch (erro) {
                console.error("Erro na requisição:", erro);
            }
        };

        fetchPaciente();
    }, []);

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Prontuários a Investigar</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                    {prontuarios && prontuarios.map((patient: any) => (
                        <Link href={'/atendimento/investigacao/' + patient.id}>
                            <div key={patient.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-4">
                                    <div className="flex items-center mb-3">
                                        <UserCircle className="h-6 w-6 text-gray-500 mr-2" />
                                        <h2 className="text-lg font-semibold text-gray-800">{patient.nomeCompleto}</h2>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>Endereço: {patient.endereco}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="h-4 w-4 mr-2" />
                                            <span>{patient.telefone}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <MapPin className="h-4 w-4 mr-2 mt-1" />
                                            <span>{patient.doenca.doenca}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                                    <div className="text-sm">
                                        <span className="font-medium text-gray-500">Idade:</span>{" "}
                                        <span className="text-gray-700">{patient.idade}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </DefaultLayout>
    )
}