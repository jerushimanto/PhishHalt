# PhishHalt

PhishHalt is a web application designed to help users determine if a given URL is malicious or not. This project is built using **JavaScript**, **HTML**, **CSS**, and **React**.

## Features
- Input a URL to check if it is malicious.
- Fast and efficient analysis.
- Simple and user-friendly UI.

## Technologies Used
- **JavaScript**
- **React**
- **HTML5**
- **CSS3**

## Getting Started

To run PhishHalt on your local machine, follow the instructions below:

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **PhishHalt Model** (Email for access)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/phishHalt.git
   ```

2. **Navigate to the server directory**:

   ```bash
   cd server
   ```

3. **Navigate to the client directory**:

   ```bash
   cd client
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Install model**:

   After getting access to the model, add it to ../server

### Running the Application

Once the dependencies are installed, you can start client using below command:

   ```bash
   npm start
   ```
Next start the the development server using 
   ```bash
   uvicorn model:app --reload
   ```

This will start the application on **localhost**.
By default, server should be available at `http://localhost:8000/`. 
By default, client should be available at `http://localhost:3000/`.

## Usage

After starting the app, navigate to `http://localhost:3000/` in browser to open the application.

## Contributing

If you would like to contribute to PhishHalt, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a Pull Request.

For any questions or feedback, feel free to reach out:

- **Jerush Imanto M**: [jerushimanto@gmail.com](mailto:jerushimanto@gmail.com)
- **GitHub**: [https://github.com/jerushimanto](https://github.com/jerushimanto)