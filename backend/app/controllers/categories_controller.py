import json

from pathlib import Path


DATA_FILE = Path("app/data/categories.json")


def get_categories():
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def get_category(category_id):
    categories = get_categories()

    for category in categories:
        if category["id"] == category_id:
            return category

    return None