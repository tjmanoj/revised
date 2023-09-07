import { io } from 'socket.io-client';

export const initSocket = async (storedToken) => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
        auth: { token: storedToken }
    };
    return io(process.env.REACT_APP_BACKEND_URL, options);
};
