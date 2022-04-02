import React from "react";
import { useLocation, useParams, useNavigate, useSearchParams } from "react-router-dom";

export const withUseRouter = (Component) => {
    return (props) => {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();
        const [searchParams, setSearchParams] = useSearchParams();
        
        return <Component searchParams={searchParams} setSearchParams={setSearchParams} location={location} params={params} navigate={navigate} {...props} />
    };
};