import axios from 'axios'
// import { createFeedback } from '../../../backend/controllers/feedbackController'
// const URL = 'http://localhost:4000';
const URL = '/api/v1';

// export const createFeedback = async (data) => {
export const createFeedback = async (name, email, age, comment) => {
    try {
        const result = await axios({
            method: 'POST',
            url: 'http://localhost:4000/api/v1/feedback/new',
            data: {
                name,email,age,comment
            }
        })
        // await axios.post(`${URL}/feedback/new`, data)
    } catch (error) {
        console.log('Error while calling the API', error)
    }
}