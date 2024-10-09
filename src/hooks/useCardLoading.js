import { useState } from "react";

const useCardLoading = () => {
    const [cardLoading, setCardLoading] = useState({});

    const toggleLoading = (cardId) => {
        setCardLoading((prevState) => ({
            ...prevState,
            [cardId]: !prevState.cardId,
        }));
    };
    return { cardLoading, toggleLoading, setCardLoading };
};
export default useCardLoading;
