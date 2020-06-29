import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Do you want to delete this?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? "Stocking" : "Out of stock";
        var statusClass = product.status ? "warning" : "default";
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`product/${product.id}/edit`} className="btn btn-success mr-10" >
                        <i
                            className="fa fa-pencil mr-10"
                            aria-hidden="true"
                        ></i>{" "}
                        Edit
                    </Link>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        <i className="fa fa-trash mr-10" aria-hidden="true"></i>{" "}
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}
