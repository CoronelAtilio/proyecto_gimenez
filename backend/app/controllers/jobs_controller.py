import json

from pathlib import Path


DATA_FILE = Path("app/data/jobs.json")


def get_jobs():

    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def filter_jobs(category_id=None, location_id=None):

    jobs = get_jobs()

    result = jobs

    if category_id is not None:
        result = [
            job
            for job in result
            if job["categoria_id"] == category_id
        ]

    if location_id is not None:
        result = [
            job
            for job in result
            if job["localidad_id"] == location_id
        ]

    return result


def get_job(job_id):

    jobs = get_jobs()

    for job in jobs:
        if job["id"] == job_id:
            return job

    return None