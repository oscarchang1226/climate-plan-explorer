export type City = {
    id: string,
    name: string,
    state: string,
}

export type CityRow = City & {
    climate_plan_count: number,
    climate_target_count: number,
}

export type ClimatePlan = {
    id: string,
    name: string,
    adoptionDate: Date,
    documentlink?: string,
    pagelink?: string,
}

export type ClimateTarget = {
    id: string,
    name: string
}