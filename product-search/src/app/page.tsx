const PRODUCTS =  [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function SearchBar() {
    return (
        <form className="flex flex-col gap-y-2 text-center">
            <span className="font-semibold text-3xl">Product Search</span>
            <input className="border-2 border-gray-600 rounded-sm p-1" placeholder="Search" />
            <label>
                <input type="checkbox" />
                    {' '}
                    Only show products in stock
            </label>
        </form>
    )
}

function ProductTable() {
    return (
        <div className="flex flex-wrap gap-y-2">
            <div className="flex flex-col w-1/2">
                <span className="text-xl font-semibold">Name</span>

                {PRODUCTS.map((value, index) => (
                    <li key={index}>{value.name}</li>
                ))}
            </div>

            <div className="flex flex-col w-1/2">
                <span className="text-xl font-semibold">Prices</span>
                
                {PRODUCTS.map((value, index) => (
                    <span key={index}>{value.price}</span>
                ))}
            </div>
        </div>
    )
}

export default function FilterableProductTable() {

    return (
        <main className="container mx-auto p-4"> 
            <div className="flex w-full justify-center">
                <div className="flex flex-col w-1/3 gap-y-2">
                    <SearchBar />
                    <ProductTable />
                </div>
            </div>
        </main>
    );
}
