from fastapi import APIRouter, HTTPException

from app.controllers.providers_controller import (
    get_provider,
    filter_providers
)


router = APIRouter(
    prefix="/api/providers",
    tags=["Providers"]
)


@router.get("/")
def providers(
    category_id: int | None = None,
    location_id: int | None = None,
    provider_type: str | None = None,
    search: str | None = None
):

    return filter_providers(
        category_id,
        location_id,
        provider_type,
        search
    )


@router.get("/{provider_id}")
def provider(provider_id: int):

    result = get_provider(provider_id)

    if result is None:

        raise HTTPException(
            status_code=404,
            detail="Proveedor no encontrado"
        )

    return result