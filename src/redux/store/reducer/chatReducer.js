const initialState = {
    messages: [

        {
            id: 1,
            name: 'Andrew',
        },

        {
            id: 2,
            name: 'Gleb',
        },

        {
            id: 3,
            name: 'Michail',
        }
    ],

    chats: [
        {
            chatId: 1,
            text: 'laudantium enim quasi est quidem magnam voluptate ipsam eosntempora quo necessitatibusndolor quam autem quasinreiciendis et nam sapiente accusantium'
        },

        {
            chatId: 2,
            text: 'Jayne_Kuhic@sydney.com'
        },

        {
            chatId: 3,
            text: 'et fugit eligendi deleniti quidem qui sint nihil autem'
        }
    ],
    isActive: false
}

export const chatReducer = (state = initialState, action) => {
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