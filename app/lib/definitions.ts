export type City = {
    id: string,
    name: string,
    state: string,
}

export type CityRow = City & {
    climate_target_count: number,
    climate_plan_count: number,
}