import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "./../../actions/index";

class ProductListPage extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    };

    render() {
        var { products } = this.props;
        // var products = this.state.products;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-primary mb-10">
                    <i className="fa fa-plus mr-10" aria-hidden="true"></i> Add
                    product
                </Link>
                <ProductList>{this.showProducts(products)}</ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    };
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(action.fetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(action.deleteProductRequest(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
