export default function ProductDetails( {params}: { params: { productId: string} } ) {
    return <h1>Product number: {params.productId}</h1>
}