import { useNavigate } from "react-router-dom";

function UseNav(form, replace) {
    const navigate = useNavigate();
    const navRed = navigate(form, replace);
    return { navRed };
}

export default UseNav;
