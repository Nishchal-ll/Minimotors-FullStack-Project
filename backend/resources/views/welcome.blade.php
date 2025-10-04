{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    <nav>
        <a href="{{ route('show.register') }}">Register</a>
        <a href="{{ route('show.login') }}">Login</a>
    </nav>
    <h1 class="text-3xl font-bold underline">Welcome to the Application</h1>
</body>
</html> --}}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>

    {{-- 1. Include your compiled Tailwind CSS file here --}}
    @vite('resources/css/app.css') 

</head>
<body class="bg-gray-100 font-sans antialiased">
    
    <header class="bg-white shadow-md">
        <nav class="container mx-auto flex justify-between items-center p-4">
            <div class="text-xl font-semibold text-gray-800">My App</div>
            <div>
                <a href="{{ route('show.register') }}" class="text-gray-600 hover:text-blue-500 mr-4 p-2 transition duration-150 ease-in-out">Register</a>
                <a href="{{ route('show.login') }}" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">Login</a>
            </div>
        </nav>
    </header>

    <main class="container mx-auto mt-10 p-4">
        {{-- 2. Your existing heading, now properly styled --}}
        <h1 class="text-3xl font-bold underline text-gray-900 text-center">Welcome to the Application 🎉</h1>
        
        <p class="text-center mt-4 text-gray-600">The navigation bar above is also styled with Tailwind CSS.</p>
    </main>

</body>
</html>