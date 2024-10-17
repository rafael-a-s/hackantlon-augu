'use client'

import DefaultLayout from "@/components/Layouts/DefaultLayout"
import { Info, AlertTriangle, CheckCircle, ArrowRight, Clipboard, UserCircle } from "lucide-react"
import Link from "next/link"

export default function page() {
    return (
        <DefaultLayout>
            <div className="bg-gray-100 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
                <div className="max-w-3xl w-full bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="bg-blue-600 p-4 sm:p-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
                            Antes de Iniciar o Seu Atendimento
                        </h1>
                    </div>
                    <div className="p-4 sm:p-6 space-y-4">
                        <div className="flex items-start">
                            <Info className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">
                                Por favor, revise as informações a seguir antes de prosseguir com seu atendimento médico.
                                É importante compreender esses pontos-chave para a sua segurança e a eficácia do seu tratamento.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">
                                Se você tem alguma alergia ou está tomando medicamentos atualmente, informe seu profissional de saúde imediatamente.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">
                                Sua privacidade e confidencialidade são nossas maiores prioridades. Todas as informações compartilhadas durante o atendimento serão mantidas estritamente confidenciais.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-3xl">
                   
                    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <UserCircle className="w-8 h-8 text-green-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">Iniciar Atendimento</h2>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Prossiga para a sua sessão de atendimento com nosso profissional de saúde.
                            </p>
                            <Link
                                href={'/atendimento/triagem'}
                                className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                            >
                                <span>Iniciar Sessão de Atendimento</span>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </DefaultLayout>
    )
}