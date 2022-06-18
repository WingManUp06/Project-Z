import socket
import random

class Socket:
    def __init__(self):
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.port = random.randint(1024, 65000)
        self.socket.bind(('localhost', self.port))
        self.socket.listen()

        while True:
            self.client_ip = input('Insert the IP address of the client: ')
            self.client_port = input('Insert the port of the client: ')

            if self.client_ip and self.client_port is not None:
                while True:
                    client_connection_socket, client_address = self.sock.accept()
                    print(f'The connection with {client_address} has been established.')
                    bytes = 500000
                    try:
                        data = client_connection_socket.recv(bytes).decode()
                        while True:
                            if data:
                                try:
                                    data = client_connection_socket.recv(bytes).decode()
                                except ConnectionResetError:
                                    client_connection_socket.close()
                                    print(f'{client_address} has left.')
                    except ConnectionResetError:
                        client_connection_socket.close()
                        print(f'{client_address} has left.')

if __name__ == '__main__':
    net_class = Socket()
    net_class.setup()
