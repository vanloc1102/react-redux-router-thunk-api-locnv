import * as Types from "./../constants/ActionType";
import callApi from "../utils/apiCaller";

export const fetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products: products,
    };
};

export const fetchProductsRequest = () => {
    return (dispatch) => {
        return callApi("products", "GET", null).then((response) => {
            dispatch(fetchProducts(response.data));
        });
    };
};

export const deleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id: id,
    };
};

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, "DELETE", null).then((response) => {
            dispatch(deleteProduct(id));
        });
    };
};

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product: product,
    };
};

export const addProductRequest = (product) => {
    return (dispatch) => {
        return callApi("products", "POST", product).then((response) => {
            dispatch(addProduct(response.data));
        });
    };
};

export const getProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product: product,
    };
};

export const getProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, "GET", null).then((response) => {
            dispatch(getProduct(response.data));
        });
    };
};

export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product: product,
    };
};

export const updateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, "PUT", product).then(
            (response) => {
                dispatch(updateProduct(response.data));
            }
        );
    };
};
