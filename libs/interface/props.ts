import { Place } from '@prisma/client'
import { PlaceCoordinate } from './type'

export interface MapPageProps {
    places: Place[]
    shareId: string
}

export interface ShareMapPageProps {
    places: Place[]
}

export interface PlaceTableProps {
    places: Place[]
    handlePlaceClick: (placeName: string, latitude: number, longitude: number) => void
    updateRoutingPoints: (selectedRoutingpoints: PlaceCoordinate[]) => void
    canDelete: boolean
}

export interface MapProps {
    places: Place[]
    selectedPosition: [number, number] | null
    handleMapClick: (latitude: number, longitude: number) => void
    center: [number, number]
    routingPoints: PlaceCoordinate[]
}

export interface ShareMapProps {
    places: Place[]
    center: [number, number]
    routingPoints: PlaceCoordinate[]
}
