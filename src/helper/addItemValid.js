export async function addItemValidation(values) {
    const errors = productNameVerify({}, values)
    productBrandVerify(errors, values)
    productTypeVerify(errors, values)
    productSizeVerify(errors, values)
    productStockVerify(errors, values)
    productPriceVerify(errors, values)
    return errors
}

function productNameVerify(error = {}, values) {
    if (!values.productName) {
        error.productName = toast.error('productName Required...!');
    }
    return error;
}
function productBrandVerify(error = {}, values) {
    if (!values.productBrand) {
        error.productBrand = toast.error('productBrand Required...!');
    }
    return error;
}
function productTypeVerify(error = {}, values) {
    if (!values.productType) {
        error.productType = toast.error('productType Required...!');
    }
    return error;
}
function productSizeVerify(error = {}, values) {
    if (!values.productSize) {
        error.productSize = toast.error('productSize Required...!');
    }
    return error;
}
function productStockVerify(error = {}, values) {
    if (!values.productStock) {
        error.productSize = toast.error('productSize Required...!');
    }
    
    return error;
}
function productPriceVerify(error = {}, values) {
    if (!values.productPrice) {
        error.productPrice = toast.error('productPrice Required...!');
    }
  
    return error;
}