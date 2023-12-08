import { fetchCityById, fetchCityPlansById, fetchCityTargetsById } from "@/app/lib/data"
import {comfortaa, roboto} from "@/app/ui/fonts";
import { Button } from "@/app/ui/plans/button"
import Link from 'next/link'

export default async function Page({ params }: { params: { id: string } }) {

    const cityId = params.id
    const [city, plans, targets] = await Promise.all([
        fetchCityById(cityId),
        fetchCityPlansById(cityId),
        fetchCityTargetsById(cityId)
    ])
    return (
        <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <div className="w-full">
                    <div className="flex w-full items-center justify-between">
                        <Link href="/"><h1 className={`${comfortaa.className} text-3xl font-bold mb-4`}>City of {city.name}, {city.state}</h1></Link>
                    </div>
                    {/*Header for targets*/}
                    <div className={`${roboto.className}`}>
                        <p className="font-bold mt-4">Emissions Reduction Targets</p>
                        {targets?.map((target) => (
                            <div key={target.id}>
                                <p>{target.name}</p>
                            </div>
                        ))}
                        <div className="mt-4 mb-4"></div>

                        <p className="font-bold mt-4">Key Resources</p>
                        {plans?.map((plan) => (
                            <div key={plan.id} className="flex">
                                <p className="w-full">{plan.name}</p>
                                {plan.documentlink? <Button className="mx-4"><a href={plan.documentlink}
                                                               target="_blank">Document</a></Button> : null}
                                {plan.pagelink? <Button className="mx-4"> <a href={plan.pagelink} target="_blank">Page</a></Button> : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}