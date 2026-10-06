from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import categories
from app.routes import providers
from app.routes import locations
from app.routes import jobs
from app.routes import search


app = FastAPI(
    title="Aiiiuda API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(categories.router)
app.include_router(providers.router)
app.include_router(locations.router)
app.include_router(jobs.router)
app.include_router(search.router)


@app.get("/")
def inicio():

    return {
        "mensaje": "API Aiiiuda funcionando"
    }