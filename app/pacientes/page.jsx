"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Head from 'next/head';
import * as ChartJS from 'chart.js';
import Navbar from '../components/Navbar/navbar';

export default function PacientesPage() {

    const valorVariable = localStorage.getItem('UserToken');


    const [dataPacientes, setDataPaciente]= useState([]);


    useEffect(() => {
      if(valorVariable !== "" || valorVariable !== null ){
        getDataUser();
      }
    }, [])


    const getDataUser= async () => {
        try {
            const response = await axios.post('https://NyamAnd.pythonanywhere.com/clientes', {token: valorVariable});
            setDataPaciente(response);
          } catch (error) {
            console.error('Error: ', error);
          }
    }
    

    return (
        <div>
            <Navbar />
            <div>
                <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nombre</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Estado</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Sede</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Recientes</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                            <tr class="hover:bg-gray-50">
                                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div class="relative h-10 w-10">
                                        <img
                                            class="h-full w-full rounded-full object-cover object-center"
                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                    </div>
                                    <div class="text-sm">
                                        <div class="font-medium text-gray-700">Steven Jobs</div>
                                        <div class="text-gray-400">jobs@sailboatui.com</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <span
                                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                    >
                                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                        Active
                                    </span>
                                </td>
                                <td class="px-6 py-4">Barranquilla</td>
                                <td class="px-6 py-4">
                                    <Link href="/odontograma">
                                        <div class="flex gap-2">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                                            >
                                                Odontograma
                                            </span>
                                        </div>
                                    </Link>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex justify-end gap-4">
                                        <a x-data="{ tooltip: 'Historial' }" href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6"
                                                x-tooltip="tooltip"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M13 21h8v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2h8zm5-14h0a2 2 0 00-2-2h-3l-1-2H8L7 5H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zm-4 0H9v3h5V7z"
                                                />
                                            </svg>

                                        </a>
                                        <a x-data="{ tooltip: 'Edite' }" href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6"
                                                x-tooltip="tooltip"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

