import React, { useEffect } from 'react'

const WithScrollToTop = (Component) => {
    const Hoc = () => {
        useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
        return <Component />;
    };
    return Hoc;
};

export default WithScrollToTop