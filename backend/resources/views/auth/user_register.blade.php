<!DOCTYPE html>
<html>
<head>
    <title>User Register</title>
</head>
<body>
    <h2>User Register</h2>

    <form method="POST" action="{{ route('user.register.post') }}">
        @csrf
        <label>Name:</label>
        <input type="text" name="name" required><br><br>

        <label>Email:</label>
        <input type="email" name="email" required><br><br>

        <label>Password:</label>
        <input type="password" name="password" required><br><br>

        <label>Confirm Password:</label>
        <input type="password" name="password_confirmation" required><br><br>

        <button type="submit">Register</button>
    </form>

    <p>Already have an account? <a href="{{ route('user.login') }}">Login here</a></p>
</body>
</html>
