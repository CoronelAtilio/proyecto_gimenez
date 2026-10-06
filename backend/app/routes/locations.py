from fastapi import APIRouter, HTTPException

from app.controllers.locations_controller import (
    get_locations,
    get_location
)


router = APIRouter(
    prefix="/api/locations",
    tags=["Locations"]
)


@router.get("/")
def locations():
    return get_locations()


@router.get("/{location_id}")
def location(location_id: int):

    result = get_location(location_id)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Localidad no encontrada"
        )

    return result