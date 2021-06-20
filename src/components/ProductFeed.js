import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            
            {/* shows first 4 products */}
            {products
              .slice(0, 4)
              .map(({id, title, price, description, category, image}) => (
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}

            {/* shows advetisment */}
            <img 
                className="md:col-span-full" 
                src="https:///links.papareact.com/dyz" 
                alt="" 
            />

            {/* shows next object that can span ipto 2 col */}
            <div className="md:col-span-2">
                {products
                .slice(4, 5)
                .map(({id, title, price, description, category, image}) => (
                    <Product 
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
            </div>

            {/* shows rest of the products */}
            {products
              .slice(5, products.length)
              .map(({id, title, price, description, category, image}) => (
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}

        </div>
    )
}

export default ProductFeed
