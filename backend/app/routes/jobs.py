from fastapi import APIRouter, HTTPException

from app.controllers.jobs_controller import (
    filter_jobs,
    get_job
)


router = APIRouter(
    prefix="/api/jobs",
    tags=["Jobs"]
)


@router.get("/")
def jobs(
    category_id: int | None = None,
    location_id: int | None = None
):

    return filter_jobs(
        category_id,
        location_id
    )


@router.get("/{job_id}")
def job(job_id: int):

    result = get_job(job_id)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Solicitud no encontrada"
        )

    return result