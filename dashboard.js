// Dashboard module for fetching products from API
// API: https://api.escuelajs.co/api/v1/products

/**
 * Get all products from the API
 * @returns {Promise<Array>} Array of products
 */
async function getAllProducts() {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        throw error;
    }
}

// Export the function for use in other modules
module.exports = {
    getAllProducts
};

// If running this file directly, demonstrate the function
if (require.main === module) {
    console.log('Fetching all products from API...\n');
    
    getAllProducts()
        .then(products => {
            console.log(`Successfully fetched ${products.length} products\n`);
            console.log('First 3 products:');
            console.log(JSON.stringify(products.slice(0, 3), null, 2));
        })
        .catch(error => {
            console.error('Failed to fetch products:', error.message);
        });
}
