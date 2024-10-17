'use client';
import { useEffect, useState } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function Page() {
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPacientes = async () => {
            try {
                const resposta = await fetch('http://localhost:3001/pacientes');
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar pacientes.');
                }
                const dados = await resposta.json();
                setPacientes(dados);
            } catch (erro: any) {
                setError(erro.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPacientes();
    }, []);

    if (loading) {
        return (
            <DefaultLayout>
                <h1>Carregando...</h1>
            </DefaultLayout>
        );
    }

    if (error) {
        return (
            <DefaultLayout>
                <h1>Erro: {error}</h1>
            </DefaultLayout>
        );
    }

    return (
        <DefaultLayout>
            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                    Prontuário
                </h4>

                <div className="flex flex-col">
                    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6 md:grid-cols-12">
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Nome</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Responsável</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">DDD</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Telefone</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Idade</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Sexo</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Gestante</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Escolaridade</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Raça/Cor</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Nome da Mãe</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Atividade</h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">Endereço</h5>
                        </div>
                    </div>

                    {pacientes.map((paciente: any, key) => (
                        <div
                            className={`grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 ${key === pacientes.length - 1
                                    ? ""
                                    : "border-b border-stroke dark:border-strokedark"
                                }`}
                            key={paciente.id}
                        >
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.nomeCompleto}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.nomeResponsavel}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.ddd}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    ({paciente.ddd}) {paciente.telefone}
                                </p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.idade}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.sexo}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.gestante}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.escolaridade}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.racaCor}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.nomeMae}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.atividadePrincipal}</p>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{paciente.endereco}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </DefaultLayout>
    );
}
