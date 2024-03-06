import axios from "axios";
import {useState} from "react";

card_data = {
    
}
export const UseFetch = ({url}) => {
    const [userData, setUserData] = useState({})
    const [workerData, setworkerData] = useState({})
    const [categoryData, setcategoryData] = useState({})
    const [cityData, setCityData] = useState({})
    const getImages = async (userID) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    // return (
    //
    // );
};