import { MOVIES_LOADING, MOVIES_ERROR, MOVIES_SUCCESS } from "./movies.type";

export const MakeMovieRequest = () => {
    return {
        type: MOVIES_LOADING,
    };
};

export const GenratingError = (payload) => {
    return {
        type: MOVIES_ERROR,
    };
}

export const ProductSucces = (payload) => {
    return {
        type: MOVIES_SUCCESS,
        payload
    };
}

export const getMovies = (temp) => async (dispatch) => {
    dispatch(MakeMovieRequest())
    let url = "https://sore-cyan-swordfish-wear.cyclic.app/movies"
    if (temp) {
        url = temp;
    }
    try {
        let res = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        res = await res.json();
        if (res) {
            dispatch(ProductSucces(res));
        }
    } catch (error) {
        console.log(error);
        dispatch(GenratingError)
        return false;
    }
};

export const postMovies = async (data) => {
    try {
        let res = await fetch(
            "https://sore-cyan-swordfish-wear.cyclic.app/movies",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        res = await res.json();
        console.log(res);
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const deleteMovies = (id) => async (dispatch) => {
    try {
        let res = await fetch(`https://sore-cyan-swordfish-wear.cyclic.app/movies/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(res)
        if (res.status == 500) {
            alert("Product Deleted Sucessfully")
            dispatch(getMovies());
        }
    } catch (error) {
        console.log(error, "arr")
    }
}

export const updateMovie = async (data) => {
    try {
        let res = await fetch(`https://sore-cyan-swordfish-wear.cyclic.app/movies/${data.id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
        console.log(res);
        // return dispatch({ type: ADDNEWPRODUCT, payload: data })
    } catch (error) {
        console.log(error, "arr")
    }
}