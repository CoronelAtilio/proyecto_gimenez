from fastapi import APIRouter

from app.controllers.search_controller import search


router = APIRouter(
    prefix="/api/search",
    tags=["Search"]
)


@router.get("/")
def search_api(q: str):

    return search(q)