export default function ReviewIdProduct( {params}: { params: {productId: String, reviewId: string} }) {
    return <h2>Product {params.productId} is reviewed by {params.reviewId}</h2>
}