import React, { useState, useEffect } from "react"
import {
  getWorkflowLogs,
} from "../../api/network"
import { useHistory, useParams } from "react-router-dom"

export default function ExecutionTable() {
const history = useHistory()
const { id } = useParams()


const [logArray, setLogArray] = useState([])    

useEffect(() => {
    ;(async () => {
        if (id) {
        const res = await getWorkflowLogs(id)
        console.log(res)
        setLogArray(res)
        }   
    })()
    }, [])

    return (
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        WorkFlow Id
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        WorkFlow Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Time Executed
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Record Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    

                { 
                // logArray[0].action_name ? (
                    logArray.map((logs) => (
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{logs.workflow_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{logs.action_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{logs.time_of_completion}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{logs.record_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        </td>
                     </tr>
                    ))
                    // ) : (
                    //     <tr>
                    //     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">NULL</td>
                    //     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NULL</td>
                    //     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NULL</td>
                    //     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NULL</td>
                    //     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    //     </td>
                    //  </tr>
                    // )
                
                }
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
  )
}
