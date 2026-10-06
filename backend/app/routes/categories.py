from fastapi import APIRouter, HTTPException

from app.controllers.categories_controller import (
    get_categories,
    get_category
)


router = APIRouter(
    prefix="/api/categories",
    tags=["Categories"]
)


@router.get("/")
def categories():
    return get_categories()


@router.get("/{category_id}")
def category(category_id: int):

    result = get_category(category_id)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Categoría no encontrada"
        )

    return result