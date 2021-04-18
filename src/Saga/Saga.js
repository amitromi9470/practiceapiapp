import { takeEvery, put, call } from "redux-saga/effects";

async function apiCall() {
    const response = await fetch(
        "http://dummy.restapiexample.com/api/v1/employees"
    ).then((res) => res.json().then((res) => res))
    console.log('####', response)
    return response
}

function* userDetails() {
    const { data } = yield call(apiCall)
    console.log('%%%', data)
    yield put({
        type: "USER_DETAILS_SAGA",
        payload: data[0].employee_name
    })

}

export default function* watchDetails() {
    yield takeEvery("USER_DETAILS", userDetails)
}