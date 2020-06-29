import React, { Component } from "react";

export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <div class="alert alert-warning">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-hidden="true"
                    >
                        &times;
                    </button>
                    <strong>404</strong> Page not found ...
                </div>
            </div>
        );
    }
}
