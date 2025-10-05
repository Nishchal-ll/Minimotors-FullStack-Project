<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
   <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
</head>
<body class="bg-gray-100 font-sans antialiased">
    <header class="bg-white shadow-md">
        <nav class="container mx-auto flex justify-between items-center p-4">
            <div>
                <a href="{{ route('show.register') }}" class="text-gray-600 hover:text-blue-500 mr-4 p-2 transition duration-150 ease-in-out">Register</a>
                <a href="{{ route('show.login') }}" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">Login</a>
            </div>
        </nav>
    </header>
</body> 
</html>