import Link from 'next/link';
import { comfortaa } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Table from "@/app/ui/cities/table";
import { fetchCitiesPages } from "@/app/lib/data";
import { Suspense } from "react";
import { CitiesTableSkeleton } from "@/app/ui/skeletons";

export default async function Page(
    {
        searchParams,
    }: {
        searchParams?: {query?: string; page?: string }
    }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchCitiesPages(query)
    return (
        <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <div className="w-full">
                    <div className="flex w-full items-center justify-between">
                        <h1 className={`${comfortaa.className} text-3xl font-bold mb-4`}>Climate Plan Explorer</h1>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                        <Search placeholder="Search Cities..."/>

                    </div>
                    <Suspense key={query + currentPage} fallback={<CitiesTableSkeleton />}>
                        <Table query={query} currentPage={currentPage} />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
