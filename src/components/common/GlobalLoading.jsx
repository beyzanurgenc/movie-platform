import React from "react";

const GlobalLoading = () => {

    return (
        <div className="spinner d-flex align-items-center justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default GlobalLoading;