const API_URL = "http://127.0.0.1:8000/api";


export async function getCategories() {
    const response = await fetch(`${API_URL}/categories/`);

    return response.json();
}


export async function getProviders(
    categoryId = null,
    locationId = null,
    providerType = null,
    search = null
) {
    const params = new URLSearchParams();

    if (categoryId) {
        params.append("category_id", categoryId);
    }

    if (locationId) {
        params.append("location_id", locationId);
    }

    if (providerType) {
        params.append("provider_type", providerType);
    }

    if (search) {
        params.append("search", search);
    }

    const response = await fetch(
        `${API_URL}/providers/?${params}`
    );

    return response.json();
}


export async function getProvider(id) {
    const response = await fetch(
        `${API_URL}/providers/${id}`
    );

    return response.json();
}


export async function getLocations() {
    const response = await fetch(
        `${API_URL}/locations/`
    );

    return response.json();
}


export async function getJobs(
    categoryId = null,
    locationId = null
) {
    const params = new URLSearchParams();

    if (categoryId) {
        params.append("category_id", categoryId);
    }

    if (locationId) {
        params.append("location_id", locationId);
    }

    const response = await fetch(
        `${API_URL}/jobs/?${params}`
    );

    return response.json();
}


export async function getJob(id) {
    const response = await fetch(
        `${API_URL}/jobs/${id}`
    );

    return response.json();
}


export async function search(q) {
    const response = await fetch(
        `${API_URL}/search/?q=${encodeURIComponent(q)}`
    );

    return response.json();
}