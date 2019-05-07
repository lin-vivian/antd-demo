import { useGet } from "../libs/ajax";
import { data } from "../constants/data";
const GET_LIST = 'GET_LIST';

const getFetch = (data) => ({
    type: GET_LIST,
    data
});

export const getFetchData = () => (dispatch, getState) => {
    // dispatch(getFetch(data))
    // fetch('http://localhost:4000/data.txt')
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         dispatch(getFetch(data))
    //     })
    //     .catch(e => {
    //         console.log(e)
    //     })
    // useGet('http://localhost:4000/data.txt', function(text) {
    //         var data = JSON.parse(text)
    //     })
    // window.$.get(
    //         'http://localhost:4000/data.txt',
    //         function(text) {
    //             var data = JSON.parse(text)
    //         }
    //     )
    //     

    window.$.ajax({
        type: 'GET',
        url: '/file/data.txt',

        success: function(result) {
            dispatch(getFetch(data))
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

        }
    })
}