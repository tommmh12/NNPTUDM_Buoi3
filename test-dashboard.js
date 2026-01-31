// Test file to demonstrate the getAllProducts function
const { getAllProducts } = require('./dashboard');

console.log('=== Testing Dashboard API ===\n');

// Test 1: Get all products
async function testGetAllProducts() {
    try {
        console.log('Test 1: Fetching all products...');
        const products = await getAllProducts();
        
        console.log(`✓ Success! Retrieved ${products.length} products\n`);
        
        // Display sample product information
        if (products.length > 0) {
            console.log('Sample Product:');
            const sample = products[0];
            console.log(`  ID: ${sample.id}`);
            console.log(`  Title: ${sample.title}`);
            console.log(`  Price: $${sample.price}`);
            console.log(`  Category: ${sample.category?.name || 'N/A'}`);
            console.log(`  Description: ${sample.description?.substring(0, 100)}...`);
            console.log(`  Images: ${sample.images?.length || 0} image(s)\n`);
        }
        
        // Display statistics
        console.log('Statistics:');
        console.log(`  Total products: ${products.length}`);
        
        const categories = [...new Set(products.map(p => p.category?.name).filter(Boolean))];
        console.log(`  Unique categories: ${categories.length}`);
        
        const avgPrice = products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length;
        console.log(`  Average price: $${avgPrice.toFixed(2)}`);
        
    } catch (error) {
        console.error('✗ Test failed:', error.message);
    }
}

// Run the test
testGetAllProducts();
