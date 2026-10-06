function CategoryCard({ category, onClick }) {

    return (
        <div
            className="category-card"
            onClick={() => onClick(category)}
        >
            <div className="category-icon">
                {category.icono}
            </div>

            <h3>{category.nombre}</h3>
        </div>
    );
}

export default CategoryCard;