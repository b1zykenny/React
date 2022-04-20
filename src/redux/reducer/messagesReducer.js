const initialState = {
    messages: [

        {
            id: '1',
            name: 'Andrew',
            message: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
        },

        {
            id: '2',
            name: 'Gleb',
            message: 'Jayne_Kuhic@sydney.com'
        },

        {
            id: '3',
            name: 'Michail',
            message: 'et fugit eligendi deleniti quidem qui sint nihil autem'
        }
    ],
    isActive: false
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'deleteMessage':
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload)
            };

        case 'addMessage':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}