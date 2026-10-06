import json

from pathlib import Path


DATA_FILE = Path("app/data/locations.json")


def get_locations():

    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def get_location(location_id):

    locations = get_locations()

    for location in locations:
        if location["id"] == location_id:
            return location

    return None