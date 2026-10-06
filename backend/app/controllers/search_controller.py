from app.controllers.providers_controller import get_providers
from app.controllers.categories_controller import get_categories


def search(text):

    text = text.lower()

    providers = get_providers()
    categories = get_categories()

    result_categories = [
        category
        for category in categories
        if text in category["nombre"].lower()
        or text in category["slug"].lower()
    ]

    result_providers = [
        provider
        for provider in providers
        if text in provider["nombre"].lower()
        or text in provider["descripcion"].lower()
    ]

    return {
        "categories": result_categories,
        "providers": result_providers
    }