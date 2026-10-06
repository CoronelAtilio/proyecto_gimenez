import json

from pathlib import Path


DATA_FILE = Path("app/data/providers.json")


def get_providers():

    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def get_provider(provider_id):

    providers = get_providers()

    for provider in providers:

        if provider["id"] == provider_id:
            return provider

    return None


def filter_providers(
    category_id=None,
    location_id=None,
    provider_type=None,
    search=None
):

    providers = get_providers()

    result = providers

    if category_id is not None:

        result = [
            provider
            for provider in result
            if category_id in provider["categoria_ids"]
        ]

    if location_id is not None:

        result = [
            provider
            for provider in result
            if provider["localidad_id"] == location_id
        ]

    if provider_type is not None:

        result = [
            provider
            for provider in result
            if provider["tipo"] == provider_type
        ]

    if search:

        search = search.lower()

        result = [
            provider
            for provider in result
            if search in provider["nombre"].lower()
            or search in provider["descripcion"].lower()
        ]

    return result