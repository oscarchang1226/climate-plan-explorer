import { fetchFilteredCities } from '@/app/lib/data';
import Link from 'next/link'

export default async function CitiesTable(
    {
        query,
        currentPage,
    }: {
        query: string;
        currentPage: number;
    }) {
    const cities = await fetchFilteredCities(query, currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {cities?.map((city) => (
                            <div
                                key={city.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <Link href={`/cities/${city.id}`}>
                                            <p className="text-xl font-medium">{city.name}</p>
                                        </Link>
                                        <p className="text-xl font-medium">{city.name}</p>
                                        <p>{city.state}</p>
                                        <p>{city.climate_plan_count}</p>
                                        <p>{city.climate_target_count}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                City
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                State
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Targets
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Action Plans
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {cities?.map((city) => (
                            <tr
                                key={city.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">
                                        <Link href={`/cities/${city.id}`}>
                                            <p>{city.name}</p>
                                        </Link>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {city.state}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {city.climate_target_count}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {city.climate_plan_count}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
